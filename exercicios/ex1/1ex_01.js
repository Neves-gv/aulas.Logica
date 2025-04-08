const prompt = require('prompt-sync')()

let NE= Number(prompt("qual o numero?")); 
let ne = Number(prompt("qual o numero?")); 

let Valor = NE + ne;
console.log( `A soma entre ${NE} + ${ne} é igual: ${Valor}`);
