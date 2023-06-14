// /**
//  * 1. Crear un arreglo llamado "nombres" que va a ser una lista de nombres
//  *     de personas invitadas a una fiesta y agregar los siguientes nombres:
//  *     Carla - Pedro - Daiana - Ivan - Ivette - Mario - Vanesa
//  *

//  * 2. Imprimir solo los nombres que terminen con la letra "a"
//  *
// 3. Crear un arreglo llamado "apellidos" que va a contener los apellidos de las
//  *     personas de la lista anterior, asignarle los siguientes valores
//  *     Gomez - Gonzales - Hernandez - Suarez - Gimenez - Gomez - Mendez
//  *
//  * 4. Imprimir todos las personas (nombre y apellido) cuyo nombre termine en "a"
//  *     y cuyo apellido empiece con "G"
//  * 5. Crear un arreglo llamado "estadoInvitacion" que almacenara en formato
// *     booleano (true o false) el estado de la invitacion de cada persona
// *     invitada y asignarle los siguientes valroes:
// *     true - false - true - true - true - false - true - false
// *

// * 6. Imprimir todas las personas invitadas (inicial del nombre y apellido) que
// *    tienen la invitacion validada
// * 7. Imprimir todas las personas (inicial del nombre, apellido y estado de la
//     *    invitacion) que cumplan con las condiciones del ejercicio 3, 4 y 6.

// let nombres = ["Carla", "Pedro", "Daiana", "Ivan", "Ivette", "Mario", "Vanesa"];
// let apellidos = [
//   "Gomez",
//   "Gonzales",
//   "Hernandez",
//   "Suarez",
//   "Gimenez",
//   "Gomez",
//   "Mendez",
// ];
// for (var i = 0; i < nombres.length; i++) {
//   if (
//     nombres[i].charAt(nombres[i].length - 1) === "a" &&
//     apellidos[i].charAt(0) === "G"
//   ) {
//     console.log(nombres[i] + " " + apellidos[i]);
//   }
// }

// let estadoInvitacion = [true, false, true, true, true, false, true];

// for (var i = 0; i < nombres.length; i++) {
//   if (estadoInvitacion[i] === true)
//     console.log(
//       nombres[i].charAt(0) +
//         " " +
//         apellidos[i].charAt(0) +
//         " " +
//         estadoInvitacion[i]
//     );
// }

// for (var i = 0; i < nombres.length; i++) {
//   if (
//     nombres[i].charAt(nombres[i].length - 1) === "a" &&
//     apellidos[i].charAt(0) === "G" &&
//     estadoInvitacion[i]
//   ) {
//     console.log(
//       nombres[i].charAt(0) + " " + apellidos[i].charAt(0) + " " + "Invitado"
//     );
//   }
// }

let listaInvitados = [
  ["Carla", "Pedro", "Daiana", "Ivan", "Ivette", "Mario", "Vanesa"],
  ["Gomez", "Gonzales", "Hernandez", "Suarez", "Gimenez", "Gomez", "Mendez"],
  [true, false, true, true, true, false, true],
];

let nombres = "";

for (let i = 0; i < listaInvitados.length; i++) {
  for (let j = 0; j < listaInvitados[i].length; j++) {}
  console.log("*-*-*-*-*-*-*-*-*");
}
