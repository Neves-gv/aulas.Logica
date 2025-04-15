//Ex07_06.js Receba uma palavra do usuário e calcule quantas vogais há nesta palavra.
const prompt = require('prompt-sync')()
let vo = ['a', 'e', 'i', 'o', 'u']
let pa = prompt('escreva uma palavra: ')
let qtdv =0
for(let letra of pa){
    if(vo.includes(letra)){
        qtdv++
        }
}
console.log(`${pa} tem ${qtdv} vogais`)