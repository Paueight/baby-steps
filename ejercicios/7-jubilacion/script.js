var edad = document.getElementById("edadUs");
var años = document.getElementById("añosUs");
var boton = document.getElementById("botonDes");
boton.addEventListener("click", calcularAños);

function calcularAños() {

  var edad = parseInt(edadUs.value);
  var años = parseInt(añosUs.value);
  var jubilacion = (años - edad);
  var fecha = new Date();
  var añoActual = fecha.getFullYear();
  var jubilacionDos = (añoActual + jubilacion);

  document.write("Faltan " + jubilacion + " años para que te jubiles." + "<br/>" + "Estamos en el " + añoActual + ", entonces puedes jubilarte en el " + jubilacionDos + ".");
}
