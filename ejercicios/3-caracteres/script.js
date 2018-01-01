function contarCaracteres() {
  var nombre = document.getElementById("nombre").value;
  var caracteres = nombre.length
  if (caracteres > 0) {
    caracteres = nombre.length
    alert("Hola, " + nombre + "! " + " tu nombre tiene " + caracteres + " carácteres.");
  }
  else {
    alert("Ingresa un nombre!")
  }
}
console.log (navigator)
