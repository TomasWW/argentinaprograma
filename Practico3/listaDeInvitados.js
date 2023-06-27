let personas = [
  "Sofia",
  "Maria",
  "Juan",
  "Andres",
  "Lionel",
  "Jose",
  "Leandro",
  "Emilia",
];
let rechazados = [];
let aceptados = [];
for (let i = 0; i < personas.length; i++) {
  if (personas[i] === "Jose" || personas[i] === "Sofia") {
    rechazados.push(personas[i]);
  } else aceptados.push(personas[i]);
}

console.log("La lista de invitados admitidos es:");
aceptados.forEach((nombre) => {
  console.log(nombre);
});
console.log("La lista de invitados rechazados es:");
rechazados.forEach((nombre) => {
  console.log(nombre);
});

let aceptadosOrdenada = aceptados.sort();
let rechazadosOrdenada = rechazados.sort();
console.log("La lista **ordenada** de invitados admitidos es:");
aceptadosOrdenada.forEach((nombre) => {
  console.log(nombre);
});

console.log("La lista de **ordenada** invitados rechazados es:");
rechazadosOrdenada.forEach((nombre) => {
  console.log(nombre);
});
