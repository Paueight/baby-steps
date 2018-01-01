var edadElemento = document.getElementById("edadUs");
var añosElemento = document.getElementById("añosUs");
var boton = document.getElementById("botonDes");
boton.addEventListener("click", calcularAños);

function calcularAños() {

  var edad = parseInt(edadElemento.value);
  var años = parseInt(añosElemento.value);
  var jubilacion = (años - edad);
  var fecha = new Date();
  var añoActual = fecha.getFullYear();
  var jubilacionDos = (añoActual + jubilacion);

  document.write("Faltan " + jubilacion + " años para que te jubiles." + "<br/>" + "Estamos en el " + añoActual + ", entonces puedes jubilarte en el " + jubilacionDos + ".");
}
