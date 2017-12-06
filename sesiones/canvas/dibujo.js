var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");
var colorcito = "#138D75";

var texto = document.getElementById("numeroLineas");
var boton = document.getElementById("botonMagico");
boton.addEventListener("click", dibujarPorClick );

function dibujarPorClick() {

  var lineas = parseInt(texto.value);
  var espacio = ancho / lineas;
  var l = 0;
  var yi, xf;
  var xi, yf;

  for(l =0; l < lineas; l++) {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
  }

  for(l =0; l < lineas; l++) {
    xi = espacio * l;
    yf = espacio * (l + 1);
    dibujarLinea(colorcito, xi, 0, 300, yf);
  }

  for(l =0; l < lineas; l++) {
    xi = espacio * l;
    yf = espacio * (lineas - l);
    dibujarLinea(colorcito, xi, 300, 300, yf);
  }

  for(l =0; l < lineas; l++) {
    xi = espacio * l;
    yf = espacio * (lineas - l);
    dibujarLinea(colorcito, xi, 0, 0, yf);
  }

  dibujarLinea(colorcito, 1, 1, 1, 299);
  dibujarLinea(colorcito, 1,299,299,299);
  dibujarLinea(colorcito, 1, 1, 299, 1);
  dibujarLinea(colorcito, 299, 1, 299, 299);
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
