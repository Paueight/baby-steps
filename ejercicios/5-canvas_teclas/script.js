/*
1. Cómo detectar eventos del teclado. (Eventos)
2. Saber qué tecla oprimí. (Objetos)
3. Hacer algo especifíco con las teclas arriba, abajo, izq., derecha. (Switch)
*/
var teclas = {
  ARRIBA: 38,
  ABAJO: 40,
  IZQUIERDA: 37,
  DERECHA: 39
};

document.addEventListener("keyup", dibujar)

function dibujar(evento) {
  console.log(evento);
  /*
  keyboardEvent {
    key: "ArrowUp",
    keyCode: 38
  }

  keyboardEvent {
    key: "ArrowDown",
    keyCode: 40
  }

  keyboardEvent {
    key: "ArrowLeft",
    keyCode: 37
  }

  keyboardEvent {
    key: "ArrowRight",
    keyCode: 39
  }
  */
  switch (evento.keyCode) {
    case teclas.ARRIBA:
      console.log("Oprimiste la tecla arriba");
      break;
    case teclas.ABAJO:
      console.log("Oprimiste la tecla abajo");
      break;
    case teclas.IZQUIERDA:
      console.log("Oprimiste la tecla izquierda");
      break;
    case teclas.DERECHA:
      console.log("Oprimiste la tecla derecha");
      break;
    default:
      console.log("Oprimiste la tecla: " + evento.key);
  }
}
