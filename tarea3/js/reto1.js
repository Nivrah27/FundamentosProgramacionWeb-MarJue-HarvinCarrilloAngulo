/* conexion con HTML usando el id bnt-login y cargando la función llamada login */
document.getElementById("btn-login").addEventListener("click", login);

/*funcion que valida el login*/
function validation_alert (ptext) {
    Swal.fire ({
    /* icon: "error",*/
    title: "Verificar la entrada de datos",
    text: ptext,
    confirmButtonText: "Intentar de Nuevo",
    confirmButtonColor: "#0063be",
    html: '<iframe src="https://lottie.host/embed/22fb24a2-a7f0-461a-9e36-be75f0cb0e80/tQXDNUDBsy.json"></iframe><br><p>' + ptext + "<p>",
    });
}

//funcion login
function login () {
    let user_input = document.getElementById("in-txt-user").value;
    let pass_input = document.getElementById("in-txt-pass").value;
    //declaracion de los datos usuario y password respectivamente
    let username = "cenfo";
    let password = "123";
    //identificadores de los campos username y password
    let input = [user_input, pass_input];
    let input_id = ["in-txt-user", "in-txt-pass"];
    let error_count = 0;
    let text = "";
    //ciclo FOR que hace un recorrido con la clase llamada error que permite poner la franja del error
    for (let i = 0; i < input.length; i++) {
        document.getElementById (input_id[i]).classList.remove("error");
        //si están vacíos los campos de entrada
        if (input[i] == "") {
            //aparece el texto que lleva el parametro de la funcion validacion_alert
            text = "Los campos requeridos no pueden estar vacíos";
            validation_alert(text);
            document.getElementById(input_id[i]).classList.add("error");
            error_count++;
        }
    }

    //validacion si los campos username y password son iguales
    if (error_count == 0) {
        if (user_input == username && pass_input == password) {
            Swal.fire ({
                //icon: "success",
                title: " Credenciales Correctas",
                showConfirmButton: false,
                //milisegundos equivalen a 5 seg
                timer: 5000,
                html: '<iframe width="320" height="240" src="https://lottie.host/embed/9bf13e68-7ace-4357-a542-e038432d66ea/nIAr3eAzAn.json"></iframe><br><br><p> Un momento!</p>',

            }).then (() => {
                window.location.href = "https://www.ucenfotec.ac.cr", "blank";
            });
        }else {
            text = "Usuario o Contraseña Incorrecta.";
            // carga la funcion de arriba
            validation_alert(text);
        }
    }
}