document.addEventListener('DOMContentLoaded', function() {
    const selectCine = document.getElementById('selectCine');
    const cartelera = document.getElementById('cartelera');

   
    selectCine.addEventListener('change', function() {
        // Limpiar la cartelera antes de agregar nuevas películas
        cartelera.innerHTML = '';

        // Obtener el valor seleccionado del select
        const selectedCine = selectCine.value;

        // Lógica para obtener y mostrar la cartelera según el cine seleccionado
        switch (selectedCine) {
            case 'terr':
                mostrarCarteleraTerramall();
                break;
            case 'lincoln':
                mostrarCarteleraLincoln();
                break;
            case 'oxigeno':
                mostrarCarteleraOxigeno();
                break;
            default:
                console.log('Opción inválida');
        }
    });

    // Funciones para mostrar la cartelera de cada cine
    function mostrarCarteleraTerramall() {
         // Limpiar la cartelera antes de agregar nuevas películas
        cartelera.innerHTML = '';
        agregarPelicula('imagenes/interstellar.jpg', 'Interstellar', ['10:00 AM', '1:00 PM', '4:00 PM'], '₡3300');
        agregarPelicula('imagenes/topgun.jpg', 'Top Gun Maverick', ['11:00 AM', '2:00 PM', '5:00 PM'], '₡3300');
        agregarPelicula('imagenes/harry5.jpg', 'Harry Potter y la Órden del Fénix', ['12:00 PM', '3:00 PM', '6:00 PM'], '₡3300');

    }

    function mostrarCarteleraLincoln() {
        cartelera.innerHTML = '';
        agregarPelicula('imagenes/inception.jpg', 'Inception', ['10:00 AM', '1:00 PM', '4:00 PM'], '₡3300');
        agregarPelicula('imagenes/insideout.jpg', 'Inside Out', ['11:00 AM', '2:00 PM', '5:00 PM'], '₡3300');
        agregarPelicula('imagenes/coraline.jpg', 'Coraline', ['12:00 PM', '3:00 PM', '6:00 PM'], '₡3300');
    }

    function mostrarCarteleraOxigeno() {
        cartelera.innerHTML = '';
        agregarPelicula('imagenes/demonslayer.jpg', 'Demon Slayer', ['10:00 AM', '1:00 PM', '4:00 PM'], '₡2000');
        agregarPelicula('imagenes/adamsandler.jpg', 'El hijo del Diablo', ['11:00 AM', '2:00 PM', '5:00 PM'], '₡2500');
        agregarPelicula('imagenes/paranormalactivity.jpg', 'Paranormal Activity', ['12:00 PM', '3:00 PM', '6:00 PM'], '₡2200');
    }

    function agregarPelicula(imagen, titulo, horarios, precio) {
        const movieCard = document.createElement('div');
        movieCard.classList.add('card');
        movieCard.innerHTML = `
            <img src="${imagen}" class="card-img-top movie-image" alt="...">
            <div class="card-body">
                <h5 class="card-title movie-title">${titulo}</h5>
                <p class="card-text movie-info">${horarios.join(', ')}</p>
                <p class="card-text movie-info">${precio}</p>
            </div>
        `;
        cartelera.appendChild(movieCard);
    }
});