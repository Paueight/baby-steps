// Variables que guardan etiquetas HTML
var pesoElemento = document.getElementById("pesoUs"); // <input ...>
var generoElemento = document.getElementById("generoUs"); // <input ..>
var numBebidasElemento = document.getElementById("numeroBebidasUs");  // <input ..>
var cantidadAlcoholElemento = document.getElementById("cantidadAlcoholUs");  // <input ..>
var ultimaBebidaElemento = document.getElementById("ultimaBebidaUs");  // <input ..>
var boton = document.getElementById("botonCalcular");  // <input ..>

boton.addEventListener("click", calcular);

function calcular() {
  //Variables con valores que voy a trabajar
  var peso = parseInt(pesoElemento.value); // vacio
  var genero = generoElemento.value; // vacio
  var numBebidasConsumidas = parseInt(numBebidasElemento.value);  // vacio
  var cantidadAlcohol = parseFloat(cantidadAlcoholElemento.value);  // vacio
  var tiempoUltimaBebida = parseFloat(ultimaBebidaElemento.value);  // vacio
  var totalAlcohol = (numBebidasConsumidas * cantidadAlcohol);
  var bca = 0;
  const alcoholMujeres = 0.66;
  const alcoholHombres = 0.73;
  const alcoholIlegal = 0.08;

  if (genero == "mujer") {
    bca = (((totalAlcohol * 5.14) / (peso * alcoholMujeres)) - (0.15 * tiempoUltimaBebida));
    console.log(bca);
  }
    else if (genero == "hombre") {
    bca = ((totalAlcohol * 5.14 / peso * alcoholHombres) - 0.15 * tiempoUltimaBebida);
    console.log(bca);
  }
  if (bca >= alcoholIlegal) {
    document.write("Tu cantidad de alcohol es " + bca.toFixed(2) + "</br>" + "No es legal que manejes");
  }
    else if (bca < alcoholIlegal) {
    document.write("Tu cantidad de alcohol es " + bca.toFixed(2) + "</br>" + "Si es legal que manejes");
  }
}
