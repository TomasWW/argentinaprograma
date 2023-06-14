const readlineSync = require("readline-sync");
let mes = parseInt(readlineSync.question("Elegir un numero del 1 al 12: "));

let meses = [
  { nombre: "Enero", dias: 31 },
  { nombre: "Febrero", dias: 28 },
  { nombre: "Marzo", dias: 31 },
  { nombre: "Abril", dias: 30 },
  { nombre: "Mayo", dias: 31 },
  { nombre: "Junio", dias: 30 },
  { nombre: "Julio", dias: 31 },
  { nombre: "Agosto", dias: 31 },
  { nombre: "Septiembre", dias: 30 },
  { nombre: "Octubre", dias: 31 },
  { nombre: "Noviembre", dias: 30 },
  { nombre: "Diciembre", dias: 31 },
];

if (mes > 0 && mes <= 12) {
  console.log(
    `La cantidad de dias del mes de ${meses[mes - 1].nombre} es ${
      meses[mes - 1].dias
    } `
  );
} else console.log("Elija entre los meses 1 y 12");
