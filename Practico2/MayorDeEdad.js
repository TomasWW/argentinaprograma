const readlineSync = require("readline-sync");
let edad = readlineSync.question("Que edad Tenes: ");

if (edad >= 18) {
  console.log("Eres Mayor de Edad");
} else console.log("Eres Menor de Edad");
