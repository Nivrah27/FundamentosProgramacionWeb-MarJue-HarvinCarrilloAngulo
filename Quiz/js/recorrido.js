var panorama, viewer, container, infospot;
container = document.querySelector('#container_principal');
panorama = new PANOLENS.ImagePanorama('imagenes/tienda.jpg');

var infospot1 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot1.position.set(0, 0, -500);
infospot1.addHoverText('Sumérgete en el mágico mundo de Harry Potter con este adorable Funko Pop. Con su característico estilo cabezón y detalles encantadores, este Funko captura la esencia del famoso mago y su mundo. Perfecto para cualquier fanático de la saga, este Funko de Harry Potter es una adición imprescindible a tu colección. ¡Deja que la magia de Hogwarts entre en tu hogar!', -60);
infospot1.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Sumérgete en el mágico mundo de Harry Potter con este adorable Funko Pop. Con su característico estilo cabezón y detalles encantadores, este Funko captura la esencia del famoso mago y su mundo. Perfecto para cualquier fanático de la saga, este Funko de Harry Potter es una adición imprescindible a tu colección. ¡Deja que la magia de Hogwarts entre en tu hogar!.</div>';
panorama.add(infospot1);

var infospot2 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot2.position.set(-500, -40, -323);
infospot2.addHoverText('Honra la valentía y la determinación del Gran Pilar del Fuego con este increíble Funko Pop de Rengoku. Capturando su poderosa presencia y su espíritu indomable, este Funko es un tributo perfecto al querido personaje de Demon Slayer. Con detalles intrincados y una pose épica, este Funko de Rengoku es una pieza imprescindible para cualquier fan de la serie', -60);
infospot2.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Honra la valentía y la determinación del Gran Pilar del Fuego con este increíble Funko Pop de Rengoku. Capturando su poderosa presencia y su espíritu indomable, este Funko es un tributo perfecto al querido personaje de Demon Slayer. Con detalles intrincados y una pose épica, este Funko de Rengoku es una pieza imprescindible para cualquier fan de la serie</div>';
panorama.add(infospot2);

var infospot3 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot3.position.set(500, 219, -147);
infospot3.addHoverText('Celebra la saga de Naruto con este encantador Funko Pop del icónico ninja. Con su postura dinámica y su expresión determinada, este Funko captura la esencia del intrépido protagonista y su búsqueda de la grandeza. Ya sea que seas un fan de la serie desde hace mucho tiempo o estés descubriendo el mundo de Naruto, este Funko es una adición emocionante a tu colección', -60);
infospot3.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Celebra la saga de Naruto con este encantador Funko Pop del icónico ninja. Con su postura dinámica y su expresión determinada, este Funko captura la esencia del intrépido protagonista y su búsqueda de la grandeza. Ya sea que seas un fan de la serie desde hace mucho tiempo o estés descubriendo el mundo de Naruto, este Funko es una adición emocionante a tu colección</div>';
panorama.add(infospot3);

var infospot4 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot4.position.set(294, -80, 500);
infospot4.addHoverText('Eleva tu espíritu y canaliza el poder de los Saiyajin con este épico Funko Pop de Goku. Con su aura de determinación y su pose de combate, este Funko captura la esencia del legendario guerrero de Dragon Ball Z. Ya sea que estés entrenando en el Templo del Cielo o simplemente admirando su fuerza desde tu estantería, este Funko de Goku es una incorporación esencial para cualquier fan de la serie.', -60);
infospot4.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Eleva tu espíritu y canaliza el poder de los Saiyajin con este épico Funko Pop de Goku. Con su aura de determinación y su pose de combate, este Funko captura la esencia del legendario guerrero de Dragon Ball Z. Ya sea que estés entrenando en el Templo del Cielo o simplemente admirando su fuerza desde tu estantería, este Funko de Goku es una incorporación esencial para cualquier fan de la serie.</div>';
panorama.add(infospot4);

var infospot5 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot5.position.set(-501, 420, 288);
infospot5.addHoverText('Hazte con la tecnología más avanzada y el estilo más elegante con este increíble Funko Pop de Iron Man. Con su armadura reluciente y su postura de héroe, este Funko captura la esencia del genio, millonario, playboy y filántropo favorito de todos. Ya sea que te unas a la batalla contra Thanos o simplemente añadas un toque de poderío tecnológico a tu colección, este Funko de Iron Man es imprescindible para cualquier fan de Marvel.', -60);
infospot5.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Hazte con la tecnología más avanzada y el estilo más elegante con este increíble Funko Pop de Iron Man. Con su armadura reluciente y su postura de héroe, este Funko captura la esencia del genio, millonario, playboy y filántropo favorito de todos. Ya sea que te unas a la batalla contra Thanos o simplemente añadas un toque de poderío tecnológico a tu colección, este Funko de Iron Man es imprescindible para cualquier fan de Marvel..</div>';
panorama.add(infospot5);

var infospot6 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot6.position.set(-500, -25, 155);
infospot6.addHoverText('🎉 ¡Bienvenidos a la tienda más cool del universo geek! 🎮🚀 Eres fan de Harry Potter, amante del anime o simplemente adicto a los Funkos? ¡Este es tu lugar! 🌟 Encuentra los Funkos más épicos, las figuras más raras y el merchandising más exclusivo aquí. ¡Nuestro equipo geek está listo para ayudarte a encontrar la joya que estás buscando! ¡Únete a la diversión y vive la experiencia geek definitiva en nuestra tienda! 🎉✨', -60);
infospot6.element.innerHTML = `
    <div class="" style="">
    <iframe width="720" height="480" src="https://www.youtube.com/embed/d5An8ZMocVo?si=AUmYmQkjEEB5AgX0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>    
    </div>
`;
panorama.add(infospot6);

var infospot7 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot7.position.set(443, 265, -500);
infospot7.addHoverText('Una intro para la historia...', -60);
infospot7.element.innerHTML = '<div style="color:#000; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"><audio controls><source src="audios/intro.weba" type="audio/mpeg"></audio></div>';
panorama.add(infospot7);

viewer = new PANOLENS.Viewer({ container : container });
viewer.add(panorama);