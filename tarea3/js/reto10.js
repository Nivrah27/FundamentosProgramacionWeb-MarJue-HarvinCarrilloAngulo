document.addEventListener('DOMContentLoaded', function() {
    const buscadorForm = document.getElementById('buscadorForm');
    const cedulaInput = document.getElementById('cedula');
    const resultadoContainer = document.getElementById('resultado');

    buscadorForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const cedula = cedulaInput.value;

        if (validarCedula(cedula)) {
            mostrarInformacionEmpleado(cedula);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La cédula ingresada no es válida'
            });
        }
    });

    function validarCedula(cedula) {
      
        return /^[0-9]{9}$/.test(cedula);
    }

    function mostrarInformacionEmpleado(cedula) {
        
        const empleados = {
            '109110338': { nombre: 'Robert Downey Jr', jornada: 'Diurna', salario: '$1500', foto: '../imagenes/robert.jpeg', descripcion: 'Jefe de recepción' },
            '209110338': { nombre: 'Ester Esposito', jornada: 'Nocturna', salario: '$1200', foto: '../imagenes/ester-exposito.jpg', descripcion: 'Camarera' },
            '309110338': { nombre: 'Lewis Hamilton', jornada: 'Diurna', salario: '$1600', foto: '../imagenes/lewis.jpg', descripcion: 'Chef' },
            '409110338': { nombre: 'Scarlet Carrillo', jornada: 'Mixta', salario: '$1400', foto: '../imagenes/scarlet.jpg', descripcion: 'Recepcionista' },
            '509110338': { nombre: 'Elon Musk', jornada: 'Nocturna', salario: '$1300', foto: '../imagenes/elon-musk.jpg', descripcion: 'Botones' }
        };

        if (empleados[cedula]) {
            const empleado = empleados[cedula];
            mostrarResultado(empleado);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El usuario no existe'
            });
        }
    }

    function mostrarResultado(empleado) {
        resultadoContainer.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="imagenes/${empleado.foto}" class="card-img-top" alt="Foto del empleado">
                <div class="card-body">
                    <h5 class="card-title">${empleado.nombre}</h5>
                    <p class="card-text">Descripción: ${empleado.descripcion}</p>
                    <p class="card-text">Jornada: ${empleado.jornada}</p>
                    <p class="card-text">Salario: ${empleado.salario}</p>
                </div>
            </div>
        `;
    }
});