const readlineSync = require("readline-sync");
let numero = parseInt(readlineSync.question("Elegir un numero entero: "));

if (numero > 0 && numero % 2 == 0) {
  console.log("El numero es positivo y par");
} else if (numero > 0 && numero % 2 != 0) {
  console.log("El numero es positivo e impar");
} else if (numero < 0) {
  console.log("El numero es negativo");
} else console.log("El numero es 0");
