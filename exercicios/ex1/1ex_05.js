const prompt = require('prompt-sync')()

let Metros = Number(prompt("qual o valor do metros?"))
let centimetros = Metros * 100
console.log( `A multiplicaoentre ${Metros} * ${100} é igual: ${centimetros}cm`);
let milimitros = Metros * 1000
console.log( `A multiplicaoentre ${Metros} * ${1000} é igual: ${milimitros}mm`);
let km = Metros / 1000
console.log( `A multiplicaoentre ${Metros} / ${1000} é igual: ${km}km`);
