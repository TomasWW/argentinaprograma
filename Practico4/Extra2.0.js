const readlineSync = require("readline-sync");
const PIEDRA = "Piedra";
const PAPEL = "Papel";
const TIJERAS = "Tijeras";
let USUARIO = readlineSync.question("Hola! Como te llamas? ");
let GANA_USUARIO = `Gana ${USUARIO}`;
const GANA_PC = "Gana Computadora";
const EMPATE = "Empate";

function obtenerJugadaComputadora() {
  let num = Math.random() * 3;
  let round = Math.round(num);
  let compu;
  if (round == 0) {
    compu = PIEDRA;
  } else if (round == 1) {
    compu = PAPEL;
  } else compu = TIJERAS;

  return compu;
}

function obtenerJugadaUsuario() {
  let eleccion = parseInt(
    readlineSync.question("Piedra = 0, Papel = 1 o Tijeras = 2: ")
  );
  const opciones = ["Piedra", "Papel", "Tijeras"];

  while (eleccion < 0 || eleccion > 2) {
    console.log("Elección inválida. Debes elegir entre 0, 1 o 2.");
    eleccion = readlineSync.question("Piedra = 0, Papel = 1 o Tijeras = 2: ");
  }

  return opciones[eleccion];
}

function determinarGanador(compu, usuario) {
  let resultado;
  if (compu == usuario) {
    resultado = EMPATE;
  } else if (
    (usuario == PIEDRA && compu == TIJERAS) ||
    (usuario == TIJERAS && compu == PAPEL) ||
    (usuario == PAPEL && compu == PIEDRA)
  ) {
    resultado = GANA_USUARIO;
  } else {
    resultado = GANA_PC;
  }

  console.log(
    `La computadora eligio: ${compu}. 
${USUARIO} eligio: ${usuario}.`
  );
  console.log(resultado);
  return resultado;
}

function modosJuegos() {
  let modoJuego = parseInt(
    readlineSync.question(`Que modo quieres jugar:
          Una Jugada = 1
          Dos Jugadas = 2
          El Mejor de tres = 3
          `)
  );
  while (modoJuego < 1 || modoJuego > 3) {
    console.log("--------Eleccion Invalida-------");
    modoJuego = readlineSync.question(`Que modo quieres jugar:
    Una Jugada = 1
    Dos Jugadas = 2
    El Mejor de tres = 3
    `);
  }
  let contadorUsuario = 0;
  let contadorComputadora = 0;

  for (let i = 1; i <= modoJuego; i++) {
    console.log(`
    _______Mano Numero= ${i}/${modoJuego}_______
     `);
    let compu = obtenerJugadaComputadora();
    let usuario = obtenerJugadaUsuario();
    let resultado = determinarGanador(compu, usuario);
    if (resultado == GANA_PC) {
      contadorComputadora += 1;
    } else if (resultado == GANA_USUARIO) {
      contadorUsuario += 1;
    }
  }
  let mensaje = `
  -----Resultado Final-----
  >La computadora obtuvo: ${contadorComputadora}.
  >${USUARIO} obtuvo: ${contadorUsuario}.`;

  if (contadorComputadora > contadorUsuario) {
    console.log(
      `${mensaje}
-----Resultado Final-----> ${GANA_PC}
`
    );
  } else if (contadorComputadora < contadorUsuario) {
    console.log(
      `${mensaje}
-----Resultado Final-----> ${GANA_USUARIO}
`
    );
  } else
    console.log(
      `${mensaje}
-----Resulado Final-----> ${EMPATE}.
`
    );
}
modosJuegos();
