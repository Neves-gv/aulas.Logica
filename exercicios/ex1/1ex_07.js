const prompt = require('prompt-sync')()

let reais = Number(prompt("qual o valor do dinheiro?")); 
let dolar = reais / 6.80
console.log( ` ${reais} / ${5.85}  ${dolar}`);