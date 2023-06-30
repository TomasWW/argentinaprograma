const readlineSync = require("readline-sync");
const ROCK = "Piedra";
const PAPER = "Papel";
const SCISSORS = "Tijeras";
let USER = readlineSync.question(
  `Hola Bienvenido a Piedra, Papel o Tijera. 
  Ingrese su nombre: `
);
let USER_WINS = `Gano ${USER}`;
const PC_WINS = "Gano la PC";
const DRAW = "Empate";

function getPcChoice() {
  let num = Math.random() * 3;
  let round = Math.round(num);
  let PC;
  if (round == 0) {
    PC = ROCK;
  } else if (round == 1) {
    PC = PAPER;
  } else PC = SCISSORS;

  return PC;
}

function getUserChoice() {
  let selection = parseInt(
    readlineSync.question(`
    > Piedra = 0 
    > Papel = 1
    > Tijeras = 2
    Tu respuetas:  `)
  );
  const options = [ROCK, PAPER, SCISSORS];

  while (selection < 0 || selection > 2) {
    console.log("Eleccion Invalida. Elegi entre-->  ");
    selection = readlineSync.question("Piedra = 0, Papel = 1 o Tijeras = 2:");
  }

  return options[selection];
}

function determineWinner(PC, user) {
  let score;
  if (PC == user) {
    score = DRAW;
  } else if (
    (user == ROCK && PC == SCISSORS) ||
    (user == SCISSORS && PC == PAPER) ||
    (user == PAPER && PC == ROCK)
  ) {
    score = USER_WINS;
  } else {
    score = PC_WINS;
  }

  console.log(
    `La PC eligio: ${PC}. 
${USER} eligio: ${user}.`
  );
  console.log(score);
  return score;
}

function gameModes() {
  let gameMode = parseInt(
    readlineSync.question(`Hola ${USER}
    Que modo quieres jugar:
         > Una Jugada = 1
         > Dos Jugadas = 2
         > El Mejor de tres = 3
          `)
  );
  while (gameMode < 1 || gameMode > 3) {
    console.log("--------Eleccion Invalida-------");
    gameMode = readlineSync.question(`Que modo quieres jugar:
    Una Jugada = 1
    Dos Jugadas = 2
    El Mejor de tres = 3
    `);
  }
  let userCounter = 0;
  let userPC = 0;

  for (let i = 1; i <= gameMode; i++) {
    console.log(`
    _______Ronda ${i}/${gameMode}_______
     `);
    let PC = getPcChoice();
    let user = getUserChoice();
    let score = determineWinner(PC, user);
    if (score == PC_WINS) {
      userPC += 1;
    } else if (score == USER_WINS) {
      userCounter += 1;
    }
  }
  let message = `
  -----Resultado Final-----
  >La PC obtuvo: ${userPC}.
  >${USER} obtuvo: ${userCounter}.`;

  if (userPC > userCounter) {
    console.log(
      `${message}
-----Marcador Final-----> ${PC_WINS}
`
    );
  } else if (userPC < userCounter) {
    console.log(
      `${message}
-----Marcador Final-----> ${USER_WINS}
`
    );
  } else
    console.log(
      `${message}
-----Marcador Final-----> ${DRAW}.
`
    );
}
gameModes();
