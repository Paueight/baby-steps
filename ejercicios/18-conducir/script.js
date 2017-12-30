var edadConducir = document.getElementById("edadUs");
var boton = document.getElementById("botonVerificar");
boton.addEventListener("click", verificar);

function verificar() {
 var edad = parseInt(edadConducir.value);

 if (edad >= 16) {
    document.write("Tienes la edad necesaria para manejar!");
 }

 else if (edad < 16 && edad > 0) {
   document.write("No tienes la edad para manejar, ¡eres un bebé!");
 }

 else if (edad <= 0) {
   document.write("Please, bitch ingresa una edad válida XD")
 }

 else {
   document.write("Please, bitch ingresa una edad válida XD")
 }
 }
