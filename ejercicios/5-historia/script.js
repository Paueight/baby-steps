var sustantivoElemento = document.getElementById("sustantivoUs");
var verboElemento = document.getElementById("verboUs");
var adjetivoElemento = document.getElementById("adjetivoUs");
var adverbioElemento = document.getElementById("adverbioUs");
var boton = document.getElementById("botonHistoria");
boton.addEventListener("click", formarHistoria);

function formarHistoria() {
  var sustantivo = (sustantivoElemento.value);
  var verbo = (verboElemento.value);
  var adjetivo = (adjetivoElemento.value);
  var adverbio = (adverbioElemento.value);

  document.write("Tu " + sustantivo + " " + adjetivo + " prefiere " + verbo + " " + adverbio + ".");
}
