var elementoCanvas = document.getElementById("dibujo"); // <canvas></canvas>
var lienzo = elementoCanvas.getContext("2d"); // Trae el lienzo en segunda dimensión
var lineas = 30;
/*
dibujarLinea("peru", 300, 0, 0, 300); // Primer llamada de función
dibujarLinea("blue", 150, 150, 300, 300); // Segunda llamada de función
dibujarLinea("green", 0, 0, 150, 150); // Tercera llamada de función
*/

/*
dibujarLinea("red", 0,  0, 10, 300); // Línea 1
dibujarLinea("red", 0, 10, 20, 300); // Línea 2
dibujarLinea("red", 0, 20, 30, 300); // Línea 3
dibujarLinea("red", 0, 30, 40, 300); // Línea 4
*/

/*
Formulas:
yi = i * 10
xf = 10 * (i + 1)
*/

// Esquina inferior izquierda
for (var i = 0; i < lineas; i++) {
  yi = i * 10;
  xf = 10 * (i + 1);

  dibujarLinea("#26A69A", 0, yi, xf, 300);
}

function dibujarLinea(colorDeLinea, xi, yi, xf, yf) {
  // Explorar nuestras variables
  console.log(colorDeLinea);
  console.log(xi);
  console.log(yi);
  console.log(xf);
  console.log(yf);

  lienzo.beginPath(); // Pone el lápiz en el lienzo
  lienzo.strokeStyle = colorDeLinea; // Define un color para el trazo
  lienzo.moveTo(xi, yi); // Define el punto inicial (x, y)
  lienzo.lineTo(xf, yf); // Define el punto final (x, y)
  lienzo.stroke(); // Traza la línea
  lienzo.closePath(); // Levanta el lápiz
}
