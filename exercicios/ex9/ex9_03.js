//Crie uma função que recebe um número como parâmetro e exiba a tabuada até o
//10, chame essa função por 3 vezes enviando parâmetros diferentes
const prompt = require('prompt-sync')()
function tabuadadonumero(numeros){
    for (let n = 0; n <= 10; n++){
        console.log(`${numeros} vezes ${n} é igual a ${numeros * n}`)
    }
    }
tabuadadonumero(numeros = Number(prompt('digite um numero da taboada até 10: ')))
tabuadadonumero(numeros = Number(prompt('digite um numero da taboada até 10: ')))
tabuadadonumero(numeros = Number(prompt('digite um numero da taboada até 10: ')))