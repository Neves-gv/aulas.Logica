const prompt = require('prompt-sync')();

// //criano nossa primira função
// function cabecalho(texto){
//     console.log('...............................')
//     console.log(texto)
//     console.log('...............................')
// }
// //criando outra função
// function saudacao(){
//     let nome = prompt('Digite seu nome: ')
//     console.log(`${nome} tenha um bom dia `)
// }
// //chamando a função
// cabecalho('SESI/SENAI')
// //posso declarar umavariavel a passa-la como parametro para função
// let escola= 'sesi 025'
// cabecalho(escola)
// saudacao()

// //criei a função que resebera os valores como parametro a partir desses valores, realizando o calculo e mostralo
// function soma(n1, n2){
//     let resutado = n1 +n2
//     console.log(resutado)
// }
// soma(5, 6)
// soma(8, 9)
// soma(8, 18)

//Exercicios
function Parlmpar(n){
    if(n%2 == 0){
        console.log('Seu numero é par')
    }else{
        console.log('seu numero é impar')
    }
}
Parlmpar('20')
Parlmpar('21')
//função com o valor do resutado o calculoé realizada para chamada da função
function media(no1, no2){
    let resu = (no1 + no2) / 2;
    return(resu)
}
console.log(media(5, 10))
//armazenei o retorno da fução em uma variavel
let valor = media(9, 7)
//utilizei o retorno da função para escrever na tela
console.log(valor)
//utilizei a variavel que recebeu o retorno da função para chamar a função par ou impar passado o valor como paramentro
Parlmpar(valor)