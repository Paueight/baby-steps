// Variables que guardan etiquetas HTML
var estaturaUsuario = document.getElementById("estaturaUs");
var pesoUsuario = document.getElementById("pesoUs");
var boton = document.getElementById("botonCalcular");

boton.addEventListener("click", calcular);

function calcular() {
  //Variables con valores que voy a trabajar
  var estatura = parseFloat(estaturaUsuario.value);
  var peso = parseFloat(pesoUsuario.value);
  var bmi = ((peso / (estatura * estatura)) * 703)

  if (bmi >= 18.5 && bmi <= 25) {
    document.write("Tu BMI es " + bmi.toFixed(2) + "</br>" + "Estás dentro del rango del peso ideal");
  }
  else if (bmi < 18.5) {
    document.write("Tu BMI es " + bmi.toFixed(2) + "</br>" + "Estás baj@ de peso");
  }
  else {
    document.write("Tu BMI es " + bmi.toFixed(2) + "</br>" + "Estás pasado de peso. Deberías consultar a tu médico.");
  }
}
