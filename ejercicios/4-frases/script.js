var frase = document.getElementById("fraseUs");
var autor = document.getElementById("autorUs");
var boton = document.getElementById("botonOk");
boton.addEventListener("click", imprimirFrase);

function imprimirFrase() {

  var frase = (fraseUs.value);
  var autor = (autorUs.value);
  document.write(autor + " dijo, " + "\"" + frase + ".\"");
}
