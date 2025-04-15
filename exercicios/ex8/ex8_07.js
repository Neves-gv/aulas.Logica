//Ex07_07.js Nessa string ‘Gol;Corsa;Palio;Monza;Fusca;’, faça a separação desses itens para uma lista e exiba o item e a posição que ele está.
let carro = 'Gol;Corsa;Palio;Monza;Fusca;'
let Lc = carros.split(';')

Lc.pop()
for(let[posicao, carros] of Lc.entries()){
    console.log(`Posição ${posicao}: ${carro} `)
}