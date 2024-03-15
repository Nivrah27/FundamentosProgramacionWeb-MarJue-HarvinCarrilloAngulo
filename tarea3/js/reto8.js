document.addEventListener('DOMContentLoaded', function() {
    const registroForm = document.getElementById('registroForm');
    const registrosDropdown = document.getElementById('registros');
    const infoContainer = document.getElementById('infoContainer');

    registroForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const pais = document.getElementById('pais').value;
        const habitacion = document.getElementById('habitacion').value;
        const pago = document.getElementById('pago').value;

        const nuevoRegistro = {
            nombre: nombre,
            apellido: apellido,
            pais: pais,
            habitacion: habitacion,
            pago: pago
        };

        agregarRegistro(nuevoRegistro);
        mostrarRegistros();
        registroForm.reset();
    });

    registrosDropdown.addEventListener('change', function() {
        const index = registrosDropdown.value;
        mostrarInfoPersona(index);
    });

    function agregarRegistro(registro) {
        let registros = JSON.parse(localStorage.getItem('registros')) || [];
        registros.push(registro);
        localStorage.setItem('registros', JSON.stringify(registros));
    }

    function mostrarRegistros() {
        registrosDropdown.innerHTML = '';
        let registros = JSON.parse(localStorage.getItem('registros')) || [];
        registros.forEach(function(registro, index) {
            let option = document.createElement('option');
            option.text = `${registro.nombre} ${registro.apellido}`;
            option.value = index;
            registrosDropdown.add(option);
        });
    }

    function mostrarInfoPersona(index) {
        const registros = JSON.parse(localStorage.getItem('registros')) || [];
        const persona = registros[index];
        infoContainer.innerHTML = `
            <h2>Información de la Persona Seleccionada</h2>
            <p><strong>Nombre:</strong> ${persona.nombre}</p>
            <p><strong>Apellido:</strong> ${persona.apellido}</p>
            <p><strong>País de Procedencia:</strong> ${persona.pais}</p>
            <p><strong>Tipo de Habitación:</strong> ${persona.habitacion}</p>
            <p><strong>Forma de Pago:</strong> ${persona.pago}</p>
        `;
    }

    mostrarRegistros();
});