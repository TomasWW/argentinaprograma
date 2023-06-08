let entrada = prompt("Ingrese su nombre:");
let datos = entrada.split(" ");

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");

nombre.innerHTML = datos[0];
apellido.innerHTML = datos[1];

entrada = window.prompt("Ingrese su DNI:");
let dni_entrada = entrada.split(".");
let dni_ok = "";

for (let i = 0; i < dni_entrada.length; i++) {
  dni_ok = dni_ok + dni_entrada[i];
}

let dni = document.getElementById("dni");
dni.innerHTML = dni_ok;

let id = "";
id = datos[0].charAt(0) + datos[1].charAt(0) + dni_ok.slice(-3);
let id_ok = document.getElementById("id");
id_ok.innerHTML = id;

alert("ID Creado: " + id);
