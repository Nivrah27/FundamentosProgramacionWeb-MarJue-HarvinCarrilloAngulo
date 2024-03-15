document.addEventListener('DOMContentLoaded', function() {
    const encuestaForm = document.getElementById('encuestaForm');
    const registrosSelect = document.getElementById('registros');
    const respuestasContainer = document.getElementById('respuestasContainer');

    encuestaForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const edad = document.getElementById('edad').value;
        const experiencia = document.querySelector('input[name="experiencia"]:checked').value;
        const comentarios = document.getElementById('comentarios').value;
        const preferencias = [...document.querySelectorAll('input[name="preferencias"]:checked')].map(input => input.value);

        // Guardar encuesta en registros
        const encuesta = {
            nombre,
            edad,
            experiencia,
            comentarios,
            preferencias
        };

        agregarEncuesta(encuesta);

        // Limpiar formulario
        encuestaForm.reset();
    });

    registrosSelect.addEventListener('change', function() {
        const index = registrosSelect.selectedIndex;
        mostrarRespuestas(index);
    });

    function agregarEncuesta(encuesta) {
        const option = document.createElement('option');
        option.text = encuesta.nombre;
        registrosSelect.add(option);

        // Almacenar la encuesta en localStorage
        localStorage.setItem(encuesta.nombre, JSON.stringify(encuesta));
    }

    function mostrarRespuestas(index) {
        respuestasContainer.innerHTML = '';

        const nombre = registrosSelect.options[index].text;
        const encuesta = JSON.parse(localStorage.getItem(nombre));

        const respuestasDiv = document.createElement('div');
        respuestasDiv.innerHTML = `
            <h3>Respuestas de ${nombre}:</h3>
            <p>Edad: ${encuesta.edad}</p>
            <p>Experiencia: ${encuesta.experiencia}</p>
            <p>Comentarios: ${encuesta.comentarios}</p>
            <p>Preferencias: ${encuesta.preferencias.join(', ')}</p>
        `;
        respuestasContainer.appendChild(respuestasDiv);
    }
});