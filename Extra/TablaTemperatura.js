let grados = 50;

let celcius = ((grados - 32) * 5) / 9;
let farenheit = (grados * 9) / 5 + 32;

let tempMeses = {
  Enero: 128,
  Feb: 125,
  Marzo: 123,
  Abril: 124,
  Mayo: 125,
  Junio: 120,
  Julio: 118,
  Agosto: 124,
  septiembre: 127,
  Octubre: 79,
  Noviembre: 88,
  Diciembre: 99,
};
let a = Object.values(tempMeses);
let promedioTemp = 0;
let sumaTemp = 0;
let cantMeses = a.length;
for (let i of a) {
  sumaTemp += Number(i);
}

promedio = sumaTemp / cantMeses;
promedioTemp = ((promedio - 32) * 5) / 9;
console.log(`El promedio anual es:  ${promedioTemp}`);
