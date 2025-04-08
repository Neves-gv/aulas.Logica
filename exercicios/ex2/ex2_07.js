const prompt = require('prompt-sync')();

let numero2 = Number(prompt("qual o numero")); 
let numero = numero2 - 80
if( numero > 0 ){
    console.log(`${numero*7}`)
} else{
    console.log("nao leva muta")
}