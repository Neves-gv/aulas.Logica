// Faça uma função que receba dois números inteiros como parâmetro 
// e gere os números inteiros que estão no intervalo compreendido por eles.
const prompt = require('prompt-sync')()
let n1 = Number(prompt("escolha um numero:  "))
let n2 = Number(prompt("escolha um numero:  "))

function numeros(n1, n2){
    for(n1; n1 <= n2; n1++){
        console.log(n1)
    }
}
numeros(10, 20)