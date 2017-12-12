var alto = document.getElementById("altoUs");
var ancho = document.getElementById("anchoUs");
var boton = document.getElementById("botonCalcular");
boton.addEventListener("click", calcularArea);

function calcularArea() {

  var alto = parseInt(altoUs.value);
  var ancho = parseInt(anchoUs.value);
  var areaPies = (alto * ancho);
  const numero = 0.09290304
  var areaMetros = (areaPies * numero).toFixed(3);

  document.write("Ingresaste las dimensiones de " + alto + " por " + ancho + " pies." + "<br/>" + "El area es de " + areaPies + " pies cuadrados," + "<br/>" + areaMetros + " metros cuadrados.");
}
