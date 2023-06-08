let cita = "Tres tristes tigres comen trigo en un trigal";
let substring = "tigres comen trigo";

let tamañoDeCita = cita.length;
console.log(tamañoDeCita);

let indice = cita.indexOf(substring);
console.log(indice);

let citaRevisada = cita.slice(0, -indice);
console.log(citaRevisada);
