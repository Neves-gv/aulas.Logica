//estruturas condicionais operadores operacionais
const prompt = require('prompt-sync')();

let a = 2;
let b = 3;

console.log(a == b); //relação de igual
console.log(a != b); //relação diferente
console.log(a > b); //maior
console.log(a >= b); //maior ou igual
console.log(a < b); //menor
console.log(a <= b); //menor ou igual

//Estruturas condicionais
let thenhoingresso = true;
if(thenhoingresso == true){    //bloco decodigo
    console.log("posso entrar!")
}

//variavel marioridade

//receber o valorda idade

let idade = Number(prompt("qual sua idade? "))

//verificar se é maior ou igual a 18
if(idade >= 18){
    console.log("maior idade")
}

//Estruturas condicionais
thenhoingresso = false;
if(thenhoingresso == true){    //bloco decodigo
    console.log("posso entrar!")
    }else{
        console.log("estou barrado no baile")
    }

    //outro exemplo de estruturas condicionais
    idade = Number(prompt("digite sua idade"))
    if(idade >= 18){
        console.log("voce é maior de idade")
    } else{
        console.log("voce e menor de idade")
    }