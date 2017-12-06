var primerNumero = document.getElementById("numeroUno");
var segundoNumero = document.getElementById("numeroDos");
var boton = document.getElementById("botonCalcular");
boton.addEventListener("click", imprimirOperaciones);

function imprimirOperaciones() {
  var primerNumero = parseInt(numeroUno.value);
  var segundoNumero = parseInt(numeroDos.value);

  if (primerNumero > 0 && segundoNumero > 0) {
    suma(primerNumero, segundoNumero);
    resta(primerNumero, segundoNumero);
    multiplicacion(primerNumero, segundoNumero);
    division(primerNumero, segundoNumero);
  }
  else {
    document.write("Ingresa números positivos");
  }
}

function suma(a, b) {
  document.write("El resultado de sumar " + a + " y " + b + " es " + (a+b) + "<br/>");
}

function resta(a, b) {
  document.write("El resultado de restar " + a + " y " + b + " es " + (a-b) + "<br/>");
}

function multiplicacion(a, b) {
  document.write("El resultado de multiplicar " + a + " y " + b + " es " + (a*b) + "<br/>");
}

function division(a, b) {
  document.write("El resultado de dividir " + a + " y " + b + " es " + (a/b).toFixed(2));
}

//var suma = (primerNumero + segundoNumero);
//var resta = (primerNumero - segundoNumero);
//var multiplicacion = (primerNumero * segundoNumero);
//var division = (primerNumero / segundoNumero).toFixed(2);

//document.write("El resultado de sumar " + primerNumero + " y " + segundoNumero + " es " + suma + "<br/>" +  "El resultado de restar " + primerNumero + " y " + segundoNumero + " es " + resta + "<br/>" + "El resultado de multiplicar " + primerNumero + " y " + segundoNumero + " es " + multiplicacion + "<br/>" + "El resultado de dividir " + primerNumero +  " y " + segundoNumero + " es " + division);
