var personas = document.getElementById("personasUs");
var pizzas = document.getElementById("pizzasUs");
var rebanadas = document.getElementById("rebanadasUs");
var boton = document.getElementById("botonPizza");
boton.addEventListener("click", calcularRebanadas);

function calcularRebanadas() {

  var personas = parseInt(personasUs.value);
  var pizzas = parseInt(pizzasUs.value);
  var rebanadas = parseInt(rebanadasUs.value);
  var rebanadasPizza = (pizzas * rebanadas);
  var rebanadasPersona = parseInt(rebanadasPizza / personas);
  var pizzaSobra = (rebanadasPizza - (rebanadasPersona * personas));

  document.write(personas + " personas con " + pizzas + " pizzas." + "<br/>" + "A cada persona le toca/n " + rebanadasPersona + " rebanada/s de pizza" + "<br/>" + "Sobra/n " + pizzaSobra + " pizza/s.");
}
