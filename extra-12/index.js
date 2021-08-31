// i = (m/c)^1/n - 1

let capital = 40000; montante = 80000; periodos = 24;
let i = (Math.pow((montante/capital), 1/periodos) - 1) * 100;
console.log(`O seu financiamento de ${capital} reais teve uma taxa de juros de ${i.toFixed(2)}%, pois após ${periodos} meses você teve que pagar ${montante} reais.`)

