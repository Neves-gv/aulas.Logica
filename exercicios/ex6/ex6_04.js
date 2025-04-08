const prompt = require('prompt-sync')();

let inicio = Number(prompt('digite um valor de inicio: '))
let fim = Number(prompt('digite um valor do fim: '))
let passo = Number(prompt('digite um valor do passo: '))
for(inicio; inicio < fim; inicio+=passo){
    console.log(`valor inicial: ${inicio}`)
    console.log(`valor final ${fim}`)
    console.log(`valor de passos: ${passo}`)
    console.log('================================')
}