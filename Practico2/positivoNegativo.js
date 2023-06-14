const readlineSync = require("readline-sync");
let numero = readlineSync.question("Escriba un Numero: ");

if (numero > 0) {
  console.log("El numero es Positivo");
} else if (numero < 0) {
  console.log("El numero es Negativo");
} else console.log("El Numero es cero");
