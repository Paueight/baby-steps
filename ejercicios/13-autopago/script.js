var articuloUnoElem = document.getElementById("articuloUnoUs"); // <input ... id="articuloUnoUs" value=""/>
var precioUnoElem = document.getElementById("precioUnoUs");
var articuloDosElem = document.getElementById("articuloDosUs");
var precioDosElem = document.getElementById("precioDosUs");
var articuloTresElem = document.getElementById("articuloTresUs");
var precioTresElem = document.getElementById("precioTresUs");
var boton = document.getElementById("botonCalcular");
boton.addEventListener("click", calcular);

function calcular() {
  // Obtenemos los valores de las cajas
  var articuloUno = parseInt(articuloUnoElem.value)
  var precioUno = parseInt(precioUnoElem.value);
  var articuloDos = parseInt(articuloDosElem.value);
  var precioDos = parseInt(precioDosElem.value);
  var articuloTres = parseInt(articuloTresElem.value);
  var precioTres = parseInt(precioTresElem.value);

  // Operaciones
  var totalUno = (articuloUno * precioUno); // 1 * 3 = 8
  var totalDos = (articuloDos * precioDos); // 4 * 2 = 8
  var totalTres = (articuloTres * precioTres); // 2 * 6 = 12
  var subtotal = (totalUno + totalDos + totalTres); // 28
  var iva = (subtotal * 0.16); // "4.45"
  var total = (subtotal + iva); // 28 + "4.45" = "284.45"

  document.write("Subtotal: " + subtotal + "<br/>" + "Iva: " + iva.toFixed(1) + "<br/>" + "Total: " + total);
}
