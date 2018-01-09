// Variables que guardan etiquetas HTML
var numeroUnoElem = document.getElementById("numeroUnoUs");
var numeroDosElem = document.getElementById("numeroDosUs");
var numeroTresElem = document.getElementById("numeroTresUs");
var boton = document.getElementById("botonComparar");

boton.addEventListener("click", comparar);

function comparar() {
  //Variables con valores que voy a trabajar
  var numeroUno = parseInt(numeroUnoElem.value);
  var numeroDos = parseInt(numeroDosElem.value);
  var numeroTres = parseInt(numeroTresElem.value);

  if (numeroUno == numeroDos) {
    if (numeroUno == numeroTres) {
      document.write("Adiós, humano el programa ha terminado.");
    }
    else if (numeroDos > numeroTres) {
      document.write("El número mayor es " + numeroDos);
    }
    else {
      document.write("El número mayor es " + numeroTres);
    }
  } else if (numeroUno > numeroDos) {
    if (numeroUno > numeroTres) {
      document.write("El número mayor es " + numeroUno);
    } else {
      document.write("El número mayor es " + numeroTres);
    }
  } else if (numeroDos > numeroTres) {
    document.write("El número mayor es " + numeroDos);
  } else {
    document.write("El número mayor es " + numeroTres);
  }
}
