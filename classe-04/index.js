/* formula M = C(1 + i)^t */
let capital = 1000;
let iJuros = 1 + 0.126;
let tempo = 6;

let montante = capital * Math.pow(iJuros, tempo);
console.log(`O valor do montante é de ${montante.toFixed(2)}`);