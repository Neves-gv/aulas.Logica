const prompt = require('prompt-sync')()

let nu = Number(prompt("qual o numero?"));
console.log( ` valor do desconto ${nu-((nu*5)/100)}`);
