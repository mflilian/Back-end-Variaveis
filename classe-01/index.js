/* fórmula: i = p/a² */
let peso = 52;
let altura = 1.60;

let imc = peso / Math.pow(altura,2);

console.log(`Seu IMC é ${imc.toFixed(2)}`);