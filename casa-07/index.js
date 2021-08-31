// P = Po * x ^\frac{t}{7}

let po = 1000
let infectados = 4
let tempo = 100

let pessoas = po * Math.pow((infectados), tempo/7)

console.log(`A quantidade de infectados é igual a ${pessoas}`)