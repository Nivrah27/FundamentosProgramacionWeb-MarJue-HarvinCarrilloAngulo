//evento load que carga la funcion apenas se ejecuta la página web
window.onload = function () {
    //combo llamado modelo ID
    document.getElementById("modelo").onchange = function(e) {
        //destino del valor seleccionado combo1
        a = e.target.value;
        if (a == "2_cuartos") {
            var imagen = "imagenes/apartamento-g.jpg";
        }else if (a == "3_cuartos") {
            var imagen = "imagenes/Natu3161.jpg";
        
        }
    
    //agrega la imagen del carro modelo 
    document.getElementById("imagen").src = imagen;
    }
    //combo llamado version
    document.getElementById("version").onchange = function(es) {
    //destino del valor seleccionado combo2
    n = es.target.value;
    }
}


function calcular (){
    var montoCuota = 0;

    switch (a) {
        case "2_cuartos":
            if (n == "1_planta") montoCuota = 500;
            else montoCuota = 700;
            break;
        
        case "3_cuartos":
            if (n == "1_planta") montoCuota = 500;
            else montoCuota = 700;
            break;
            
        default:
            break;
    }

    // busca la carpeta imagenes la foto transparente PNG del carro
    let imagenDireccion = "imagenes/" + a.toLowerCase() + ".png";

    //El resultado se  muestra en un desplegable
    swal.fire({
        // la variable se encarga de elegir la imagen del carro
        imageUrl: imagenDireccion,
        html: "<p> Mira la cuota mensual de tu casa"  + " " +
        a +
        " " +
        n + 
        "<br><br> <strong>Cuota Mensual:</strong></p>" +
        "$" +
        montoCuota,
        imageWidth: 600,
        imageHeigth: 250,
        

    })
}

