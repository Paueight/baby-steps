var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var xi, yf;
var colorcito = "#138D75";


for(l =0; l < lineas; l++) {
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLinea(colorcito, 0, yi, xf, 300);
}

for(l =0; l < lineas; l++) {
  xi = 10 * l;
  yf = 10 * (l + 1);
  dibujarLinea(colorcito, xi, 0, 300, yf);
}

for(l =0; l < lineas; l++) {
  xi = 10 * l;
  yf = 10 * (30 - l);
  dibujarLinea(colorcito, xi, 300, 300, yf);
}

for(l =0; l < lineas; l++) {
  xi = 10 * l;
  yf = 10 * (30 - l);
  dibujarLinea(colorcito, xi, 0, 0, yf);
}

dibujarLinea(colorcito, 1, 1, 1, 299);
dibujarLinea(colorcito, 1,299,299,299);
dibujarLinea(colorcito, 1, 1, 299, 1);
dibujarLinea(colorcito, 299, 1, 299, 299);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
