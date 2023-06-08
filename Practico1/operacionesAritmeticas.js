let a = 1;
let b = 0;
let c = 1;
let d = 45;

let suma = a + b;
let resta = d - c;
let resultadoFinal = suma * resta;

console.log(resultadoFinal);

let esPar = resultadoFinal % 2 === 0;

console.log(
  `Mis variables iniciales fueron: ${a}, ${b}, ${c} y ${d}. La respuesta a verificar si el resultado final es par es: ${esPar}`
);
