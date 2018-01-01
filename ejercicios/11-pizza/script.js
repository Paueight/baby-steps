var personasElemento = document.getElementById("personasUs");
var pizzasElemento = document.getElementById("pizzasUs");
var rebanadasElemento = document.getElementById("rebanadasUs");
var boton = document.getElementById("botonPizza");
boton.addEventListener("click", calcularRebanadas);

function calcularRebanadas() {

  var personas = parseInt(personasElemento.value);
  var pizzas = parseInt(pizzasElemento.value);
  var rebanadas = parseInt(rebanadasElemento.value);
  var rebanadasPizza = (pizzas * rebanadas);
  var rebanadasPersona = parseInt(rebanadasPizza / personas);
  var pizzaSobra = (rebanadasPizza - (rebanadasPersona * personas));

  document.write(personas + " personas con " + pizzas + " pizzas." + "<br/>" + "A cada persona le toca/n " + rebanadasPersona + " rebanada/s de pizza" + "<br/>" + "Sobra/n " + pizzaSobra + " pizza/s.");
}
