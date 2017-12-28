var contraseñaUsuario = document.getElementById("contraseñaUs");
var boton = document.getElementById("botonIniciar");
boton.addEventListener("click", iniciar);

function iniciar() {
 var contraseña =(contraseñaUsuario.value);

 if (contraseña == "a12345") {
   document.write("¡Bienvenido!");
 }
 else {
   document.write("No te conozco");
 }
 }
