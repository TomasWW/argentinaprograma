frutas = [];

frutas.push("pera", "frutilla", "manzana", "banana", "naranja");
console.log(frutas);
let ultima = frutas[frutas.length - 1];
let primera = frutas.slice(0, 1);
console.log("La ultima fruta agregada fue: " + JSON.stringify(ultima));
console.log("La primera fruta agregada fue: " + JSON.stringify(primera));
