var sustantivo = document.getElementById("sustantivoUs");
var verbo = document.getElementById("verboUs");
var adjetivo = document.getElementById("adjetivoUs");
var adverbio = document.getElementById("adverbioUs");
var boton = document.getElementById("botonHistoria");
boton.addEventListener("click", formarHistoria);

function formarHistoria() {
  var sustantivo = (sustantivoUs.value);
  var verbo = (verboUs.value);
  var adjetivo = (adjetivoUs.value);
  var adverbio = (adverbioUs.value);

  document.write("Tu " + sustantivo + " " + adjetivo + " prefiere " + verbo + " " + adverbio + ".");
}
