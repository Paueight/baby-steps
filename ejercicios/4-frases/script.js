var fraseElemento = document.getElementById("fraseUs");
var autorElemento = document.getElementById("autorUs");
var boton = document.getElementById("botonOk");
boton.addEventListener("click", imprimirFrase);

function imprimirFrase() {

  var frase = (fraseElemento.value);
  var autor = (autorElemento.value);
  document.write(autor + " dijo, " + "\"" + frase + ".\"");
}
