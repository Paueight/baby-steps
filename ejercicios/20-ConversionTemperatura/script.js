// Variables que guardan etiquetas HTML
var temperaturaInicialElem = document.getElementById("temperaturaInicialUs");
var gradosElemento = document.getElementById("gradosUs");
var boton = document.getElementById("botonConvertir");

boton.addEventListener("click", convertir);

function convertir() {
  //Variables con valores que voy a trabajar
  var temperaturaInicial = parseFloat(temperaturaInicialElem.value);
  var grados = gradosElemento.value;
  var gradosF = 0;
  var gradosC = 0;

  if (grados == "fahrenheit") {
    gradosF = ((temperaturaInicial * (9 / 5)) + 32);
      document.write("La temperatura en Fahrenheit es: " + gradosF.toFixed(2));
  }

  else if (grados == "centigrados") {
    gradosC = ((temperaturaInicial - 32) * (5 / 9));
      document.write("La temperatura en Centigrados es: " + gradosC.toFixed(2));
  }
}
