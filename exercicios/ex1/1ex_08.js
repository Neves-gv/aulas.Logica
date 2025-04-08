const prompt = require('prompt-sync')()

let autura = Number(prompt("qual o valor da autura?")); 
let largura = Number(prompt("qual o valor da largura?")); 
let area = autura * largura
console.log( ` ${autura}} * ${largura} é igual: ${area}M²`);
let baudesU = area / 2
console.log( ` ${area} / ${2} é igual: ${baudesU}`);