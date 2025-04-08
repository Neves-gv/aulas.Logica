const prompt = require('prompt-sync')()

let dias = Number(prompt("quantos dias o carro foi alugado?"));
let km = Number(prompt("quantos km foi rodado?"));
console.log( `voce deve pagar ${((dias*60)+ km*0.15)} `);