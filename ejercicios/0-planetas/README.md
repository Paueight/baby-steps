### Calcula tu peso en otros planetas. :earth_americas: :full_moon:

#### Entender el problema.
#### Requerimientos --> ¿Que necesitas? :first_quarter_moon_with_face:
* ¿El usuario puede elegir el planeta en el que se   calculara su peso, o sólo habrá algunas opciones de   planetas?
* ¿En que unidad de medida tendrá que aparecer el peso del usuario?
* ¿Se podrá mostrar la gravedad del planeta al igual que el peso del ususario?
* ¿Se ejecutara una operación en especifico para calcular el peso del usuario?
#### Declaración --> ¿Que vas a construir? :rocket:
* Crear un programa que calcule el peso de cualquier usuario en otro planeta. El usuario debera ingresar su peso al programa y posteriormente seleccionar el planeta en el cual desea saber su peso. El programa tendrá que calcular el peso del usuario y deberá mostrar un mensaje con la gravedad del planeta y el peso en kilogramos.
#### Salida de ejemplo. :sunny:
* ¿Cuál es tu peso? 58 kg
* Elige un planeta. Jupiter
* La gravedad en Jupiter es de 24.7 por lo tanto tu peso es de 146 Kilogramos.
#### Descubrir entradas, procesos y salidas. :star:
###### Sustantivos                
* peso
* planeta
* gravedad
* peso en otro planeta
###### Verbos
* pedir
* calcular
* mostrar
##### Entradas: :dancer:
peso, planeta
##### Poceso: :boom:
calcular peso
##### Salidas: :runner:
gravedad, peso en otro planeta

#### Plan de Prueba TDD (Desarrollo guiado por puebas) :mag_right:

##### Prueba 1. :electric_plug:
Entradas:
* Peso del usuario --> 58 kg
* Planeta --> Marte

Resultados esperados:
* Gravedad del planeta seleccionado --> 3.7
* Peso del usuario en Marte --> 21.90 kg

Resultado actual:
* La gravedad en Marte es de 3.7, por lo tanto tu peso es de 21 Kilogramos.

##### Prueba 2. :telescope:
Entradas:
* Peso del usuario --> 58.3
* Planeta --> Jupiter

Resultados esperados:
* Gravedad del planeta seleccionado --> 24.7
* Peso del usuario en Jupiter --> 146.94 Kilogramos.

Resultado actual:
* La gravedad en Jupiter es de 24.7, por lo tanto tu peso es de 146 Kilogramos.

##### Prueba 3 :pushpin:
Entradas:
* Peso del usuario --> Cualquier letra o carácter. [Ejemplo: axybw:c,]
* Planeta --> Cualquier letra, carácter ó alguna opción de planeta (1,2)

Resultados esperados:
* Mensaje de error --> Ingresa una opción válida xD

Resultados actuales:
* Estás loco! Ingresa una opción válida XD
* La gravedad en Jupiter es de 24.7, por lo tanto tu peso es de NaN Kilogramos.

##### Prueba 4 :clapper:
Entradas:
* Peso del usuario --> Un peso mayor a 150 kg
* Planeta --> Marte, Jupiter, cualquier letra o carácter

Resultados esperados:
* Mensaje de error --> El peso máximo es de 150 kg, ingresa una opción válida. :D

Resultados actuales:
* La gravedad en Marte es de 3.7, por lo tanto tu peso es de 60 Kilogramos.
* Estás loco! Ingresa una opción válida XD

### Pseudocódigo
Analizamos --> declaración, una salida ejemplo.

Entradas --> sustantivos, verbos.

Pruebas --> errores.

Pseudocódigo --> algoritmo.

* Inicializar --> variables.
* Prompt --> solicitar al usuario algun dato.
* Mostrar --> para mostrar salidas.

```
Peso en otro Planeta.
  Inicializar peso a 0
  Inicializar planeta a 0
  Inicializar gravedad a 0
  Inicializar peso final a 0

  Solicitar peso con ¿Cuanto pesas?
  Solicitar elegir un planeta Escoge 1 para Marte, 2 para Jupiter.
  Si peso menor o igual a 150
    Si planeta Marte:
      peso_final=(peso * gMarte)/gTierra
      mostrar "La gravedad de Marte es de 3.7, por lo cual tu peso es de"
    Si planeta Jupiter:
      peso_final=(peso * gJupiter)/gTierra
      mostrar "La gravedad en Jupiter es de 24.7, por lo cual tu peso es de"
    Si no:
      mostrar "Ingresa una opción válida"
  Si no:
    mostrar "El peso máximo es de 150 kg, ingresa una opción válida. :D"
 ```
