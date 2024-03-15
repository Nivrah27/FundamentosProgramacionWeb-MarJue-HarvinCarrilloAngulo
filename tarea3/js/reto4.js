document.addEventListener('DOMContentLoaded', function() {
    const selectStar = document.getElementById('selectStar');
    const starInfoContainer = document.getElementById('starInfo');

    selectStar.addEventListener('change', function() {
        const selectedStar = selectStar.value;

        // Limpiar la información de estrella previamente mostrada
        starInfoContainer.innerHTML = '';

        // Lógica para mostrar la información de la estrella seleccionada
        switch (selectedStar) {
            case 'sol':
                mostrarInfoEstrella('X Structure', 'La "X" se debe a la absorción por el polvo y marca la posición exacta de un agujero negro que puede tener una masa equivalente a un millón de estrellas como el sol. La barra más oscura puede ser un anillo de polvo de borde de 100 años luz de diámetro. El toroide de canto no sólo oculta el agujero negro y el disco de acreción para que no sean vistos directamente desde la Tierra, sino que también determina el eje de un chorro de plasma de alta velocidad y confina la radiación del disco de acreción a un par de conos de luz dirigidos en direcciones opuestas.', 'imagenes/xstructure.jpg');
                break;
            case 'sirio':
                mostrarInfoEstrella('Sirio', 'Sirio, o Sirius en su denominación latina, es el nombre propio de la estrella Alfa Canis Maioris (α CMa, también Alfa Canis Majoris), la más brillante de todo el cielo nocturno vista desde la Tierra, situada en la constelación del hemisferio celeste sur Canis Maior. Esta estrella tan notable, que es en realidad una estrella binaria, es muy conocida desde la antigüedad; por ejemplo, en el Antiguo Egipto, la salida heliaca de Sirio marcaba la época de las inundaciones del Nilo,12​ y ha estado presente en civilizaciones tan dispares como la griega, la maya y la polinesia. En ocasiones, y coloquialmente, Sirio es llamada «Estrella Perro» a raíz de la constelación a la que pertenece', 'imagenes/sirio.jpg');
                break;
            case 'alfa-centauri':
                mostrarInfoEstrella('Alfa Centauri', 'Alfa Centauri es el sistema estelar más cercano al Sol. Se encuentra a unos 4,36 años luz (41,2 billones de kilómetros) de distancia. Está constituido por tres estrellas: Alfa Centauri A (nombre oficial según la UAI: Rigil Kentaurus), Alfa Centauri B (nombre oficial: Toliman) y Alfa Centauri C (nombre oficial: Próxima Centauri).', 'imagenes/Artist’s_impression_of_a_planet_around_Alpha_Centauri_B_(symbolic,_annotated).jpg');
                break;
            default:
                console.log('Opción inválida');
        }
    });

    function mostrarInfoEstrella(nombre, descripcion, rutaImagen) {
        const starInfo = document.createElement('div');
        starInfo.classList.add('star-info-container');
        starInfo.innerHTML = `
            <h2>${nombre}</h2>
            <p>${descripcion}</p>
            <img src="${rutaImagen}" alt="${nombre}">
        `;
        starInfoContainer.appendChild(starInfo);
    }
});