const readlineSync = require("readline-sync");

function obtenerJugadaComputadora() {
  let num = Math.random() * 3;
  let round = Math.round(num);
  let compu;
  if (round == 0) {
    compu = "Piedra";
  } else if (round == 1) {
    compu = "Papel";
  } else compu = "Tijeras";
  //   console.log(compu);
  return compu;
}

function obtenerJugadaUsuario(eleccion) {
  let usuario;
  while (eleccion < 0 || eleccion > 2) {
    if (eleccion == 0) {
      usuario = "Piedra";
    } else if (eleccion == 1) {
      usuario = "Papel";
    } else if (eleccion == 2) {
      usuario = "Tijeras";
    } else console.log("Debes elegir entre 0 1 2");
    //   console.log(usuario);
    return usuario;
  }
}

function determinarGanador(compu, usuario) {
  let resultado;
  if (compu == "Piedra" && usuario == "Piedra") {
    resultado = "Empate";
  } else if (compu == "Piedra" && usuario == "Papel") {
    resultado = "Gana Usuario";
  } else if (compu == "Piedra" && usuario == "Tijeras") {
    resultado = "Gana Computadora";
  } else if (compu == "Papel" && usuario == "Papel") {
    resultado = "Emapata";
  } else if (compu == "Papel" && usuario == "Piedra") {
    resultado = "Gana Computadora";
  } else if (compu == "Papel" && usuario == "Tijeras") {
    resultado = "Gana Usuario";
  } else if (compu == "Tijeras" && usuario == "Papel") {
    resultado = "Gana Computadora";
  } else if (compu == "Tijeras" && usuario == "Piedra") {
    resultado = "Gana Usuario";
  } else if (compu == "Tijeras" && usuario == "Tijeras") {
    resultado = "Empate";
  }

  console.log(
    `La computadora eligio: ${compu}. El usuario eligio: ${usuario}.`
  );
  console.log(resultado);
  return resultado;
}

let compu = obtenerJugadaComputadora();
let usuario = obtenerJugadaUsuario(
  readlineSync.question("Piedra = 0, Papel= 1 o Tijeras = 2 ")
);
determinarGanador(compu, usuario);
