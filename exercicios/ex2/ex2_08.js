const prompt = require('prompt-sync')();

let nu = Number(prompt("qual o valor do produto?")); 
let N = nu * 5/100
let B = nu * 3/100
if( nu > 5000 ){
    console.log(`${N}`)
} else{
    console.log(`${B}`)
}