var personas = document.getElementById("personasUs");
var pizzas = document.getElementById("pizzasUs");
var boton = document.getElementById("botonPizza");
boton.addEventListener("click", calcularRebanadas);

function calcularRebanadas() {

  var personas = parseInt(personasUs.value);
  var pizzas = parseInt(pizzasUs.value);
  var rebanadas = (personas / pizzas);
  var rebanadasDos = (rebanadas * pizzas);
  var rebanadasTotal = (rebanadasDos / personas);


  document.write(personas + " personas con " + pizzas + " pizzas." + "<br/>" + "A cada persona le toca/n " + rebanadasTotal + " rebanada/s de pizza" + "<br/>" + "No sobra ninguna rebanada");
}
