### Calcula tu peso en otros planetas. :earth_americas: :full_moon:

#### Entender el problema.
#### Requerimientos --> ¿Que necesitas? :first_quarter_moon_with_face:
* El usuario unicamente recibira el monto de la propina?
* Se mostrara al usuario la cuenta total con propina incluida?
* O se mostrara al usuario el monto de la propina y el total con la propina ya incluida?
* La cuenta total debera ser mostrada en números enteros o números decimales?
* En que divisa debera manejarse el calculo de la propina?
* El usuario podra ingresar el porcentaje que desee o seleccionar entre algunas opciones de porcentajes?
#### Declaración --> ¿Que vas a construir? :rocket:
* Crear un programa que calcule propinas. El usuario debera ingresar el monto de su cuenta y porsteriormente ingresar el porcentaje de propina que desea dejar. El programa calculará la propina con relacion al monto ingresado y finalmente mostrara al usuario el monto de la propina y el total de la cuenta con propina incluida.
#### Salida de ejemplo. :sunny:
* Ingrese la cuenta total de su consumo. 283
* Ingrese el porcentaje de propina que desea dejar. 15%
* El monto de propina es de (), por lo tanto el total de la cuenta con propina incluida es de. 325.45 pesos.
#### Descubrir entradas, procesos y salidas. :star:
###### Sustantivos                
* cuenta
* porcentaje de propina
* propina
* cuenta con propina incluida
###### Verbos
* calcular
* mostrar
##### Entradas: :dancer:
cuenta, porcentaje de propina
##### Poceso: :boom:
calcular propina
##### Salidas: :runner:
propina, cuenta con propina incluida

#### Plan de Prueba TDD (Desarrollo guiado por puebas) :mag_right:

##### Prueba 1. :electric_plug:
Entradas:
* Cuenta --> $152
* Porcentaje de propina --> 10%

Resultados esperados:
* Propina --> ()
* Cuenta total con propina incluida --> 167.2 pesos.
* El monto de propina es de (), por lo tanto el total de la cuenta con propina incluida es de 167.2 pesos.

Resultado actual:
* El total de la cuenta con propina incluida es de 167.2 pesos.

##### Prueba 2. :telescope:
Entradas:
* Cuenta --> Cualquier letra o carácter.
* Porcentaje de propina --> Cualquier letra o carácter.

Resultados esperados:
* Error al ingresar los datos solicitados.

Resultado actual:
*  El total de la cuenta con propina incluida es de NaN pesos.

##### Prueba 3 :pushpin:
Entradas:
* Cuenta --> 283
* Porcentaje de propina --> 15%

Resultados esperados:
* El monto de propina es de 42.44, por lo tanto el total de la cuenta con propina incluida es de 325.45 pesos.

Resultados actuales:
* El monto de propina es de 42.449999999999996, por lo tanto el total de la cuenta con propina incluida es de 325.45 pesos.
### Pseudocódigo
Analizamos --> declaración, una salida ejemplo.

Entradas --> sustantivos, verbos.

Pruebas --> errores.

Pseudocódigo --> algoritmo.

* Inicializar --> variables.
* Prompt --> solicitar al usuario algun dato.
* Mostrar --> para mostrar salidas.

```
Calculadora de propinas
  Inicializar cuenta a 0
  Inicializar porcentaje de propina a 0
  Inicializar propina a 0
  Inicializar cuenta con propina incluida a 0

  Solicitar cuenta con Ingrese la cuenta total de su consumo.
  Solicitar porcentaje de propina con Ingrese el porcentaje de propina que desea dejar.

 ```
