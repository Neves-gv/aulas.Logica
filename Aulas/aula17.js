//variaveis globois e locais
function nomeEscola(){
    escola = "Sesi"
    console.log(escola)
    //declarando uma variavel local
    let cidade = 'Andradina'
}
//essa variavel é uma variavel global pois ela pode ser acessada em qualquer parte do codigo
let escola = "Senai"
console.log(escola)
nomeEscola('Aracatuba')
let cidade = "São Paulo"
console.log(cidade)


var x = 10 //variavel global
console.log('Fora da funcao: ', x)

function minhafuncao(){
    var x = 10 //variavel local
    x = x + 1; 
    console.log('dentro da funcao: ', x)
    }
    minhafuncao()
    console.log('Fora da funcao de novo: ', x)
    /////////////////////////////////////////////////////////////////
    
var x = 10 //variavel global
console.log('Fora da funcao: ', x)

function minhafuncao(){
    //Estamos usando a variavel global
    var x = 10 
    x = x + 1; 
    console.log('dentro da funcao: ', x)
    }
    minhafuncao()
    x += 1
    console.log('Fora da funcao de novo: ', x)