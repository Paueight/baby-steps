var numeroElemento = document.getElementById("numeroUs");
var boton = document.getElementById("botonSumar");
boton.addEventListener("click", sumarMultiplos);

function sumarMultiplos() {

  var numero = parseInt(numeroElemento.value);
  var suma = 0;
  for (var i = 1; i < numero; i++) {

    var residuoTres = (i % 3);
    var residuoCinco = (i % 5);
    if (residuoTres == 0 || residuoCinco == 0) {
     suma = (suma + i);
    }
  }
  document.write("La suma de los múltiplos de 3 y 5 menores que " + numero + " es " + suma + "." + "<br/>");
}
