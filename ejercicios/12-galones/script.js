var anchoHabitacion = document.getElementById("anchoUs");
var altoHabitacion = document.getElementById("altoUs");
var boton = document.getElementById("botonCalcular");
boton.addEventListener("click", calcularGalones);

function calcularGalones() {

  var ancho = parseInt(anchoHabitacion.value);
  var alto = parseInt(altoHabitacion.value);
  const galon = 2
  var metrosHabitacion = (ancho * alto);
  var galonTotal = Math.round(metrosHabitacion / galon);

  document.write("Necesitas comprar " + galonTotal + " galones de pintura para cubrir " + metrosHabitacion + " metros cuadrados.")
}
