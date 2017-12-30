var cantidadPrincipal = document.getElementById("cantidadUs");
var interesTasa = document.getElementById("interesUs");
var añosInteres = document.getElementById("añosUs");
var compuestoAños = document.getElementById("compuestoUs");
var boton = document.getElementById("botonCalcular");
boton.addEventListener("click", calcular);

function calcular() {
 var cantidad = parseFloat(cantidadPrincipal.value);
 var interes = parseFloat(interesTasa.value);
 var años = parseInt(añosInteres.value);
 var compuesto = parseInt(compuestoAños.value);

 var tasaInteres = (interes / 100);
 var cantidadFinal = cantidad * Math.pow(1 + (tasaInteres / compuesto),(compuesto * años));

 document.write("$" + cantidad + " al " + interes + "% por " + años + " años, compuesto " + compuesto + " veces por año, son $" + cantidadFinal.toFixed(2));
 }
