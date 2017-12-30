var cantidadPrincipal = document.getElementById("cantidadUs");
var interesTasa = document.getElementById("interesUs");
var añosInteres = document.getElementById("añosUs");
var boton = document.getElementById("botonCalcular");
boton.addEventListener("click", calcular);

function calcular() {
 var cantidad = parseFloat(cantidadPrincipal.value);
 var interes = parseFloat(interesTasa.value);
 var años = parseInt(añosInteres.value);

 var tasaInteres = (interes / 100);
 var cantidadFinal = (cantidad * (1 + (tasaInteres * años)));

 document.write("Después de " + años + " años al " + interes + "%, la inversión valdrá $" + cantidadFinal);
 }
