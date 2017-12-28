var dolarCantidad = document.getElementById("dolarUs");
var precioDolar = document.getElementById("precioUs");
var boton = document.getElementById("botonConvertir");
boton.addEventListener("click", convertir);

function convertir() {

  var dolar = parseInt(dolarCantidad.value);
  var precio = parseInt(precioDolar.value);

  var conversion = (dolar * precio);

  document.write(dolar + " dolares, cotizados a " + precio + " pesos mexicanos, da un total de " + conversion);
}
