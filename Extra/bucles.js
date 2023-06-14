let personas = [
  //  0        1         2        3         4          5       6        7
  ["Carla", "Pedro", "Daiana", "Ivan", "Valeria", "Ivette", "Mario", "Vanesa"],
  [
    "Gomez",
    "Gonzales",
    "Hernandez",
    "Suarez",
    "Gutierrez",
    "Gimenez",
    "Gomez",
    "Gendez",
  ],
  [true, false, true, true, true, false, true, true],
];

let i_nombres = [];
let i_apellidos = [];
let i_invitacion = [];

for (let i = 0; i < personas.length; i++) {
  for (let j = 0; j < personas[i].length; j++) {
    let control = personas[i][j];
    switch (i) {
      case 0:
        if (control.endsWith("a")) {
          i_nombres.push(j);
        }
        break;
      case 1:
        if (control.startsWith("G") && i_nombres.indexOf(j) > -1) {
          i_apellidos.push(j);
        }
        break;
      case 2:
        if (
          control &&
          i_apellidos.indexOf(j) > -1 &&
          i_nombres.indexOf(j) > -1
        ) {
          i_invitacion.push(j);
        }
        break;
    }
  }
}

for (let i = 0; i < i_invitacion.length; i++) {
  let nombres = personas[0];
  let nombre = nombres[i_invitacion[i]];
  console.log(nombre);
}
