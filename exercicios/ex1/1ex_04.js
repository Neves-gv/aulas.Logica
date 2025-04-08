const prompt = require('prompt-sync')()

let Nota = Number(prompt("qual é a Nota?"));
let Nota2 = Number(prompt("qual é a nota?")); 
let SNota = Nota + Nota2;
console.log( `A soma das notas ${Nota} + ${Nota2} é igual: ${SNota}`);
let Media = SNota / 2;
console.log( `A soma das notas ${SNota} / ${2} é igual: ${Media}}`);