var numero = 100;

for (var i = 1; i < numero; i++) {

  var residuoTres = (i % 3);
  var residuoCinco = (i % 5);

  if (residuoTres == 0 && residuoCinco == 0) {
    document.write("FizzBuzz" + "<br/>");
  }
   else if (residuoTres == 0) {
    document.write("Fizz" + "<br/>");
  }
  else if (residuoCinco == 0) {
    document.write("Buzz" + "<br/>");
  }
  else {
    document.write(i + "<br/>");
  }
}
