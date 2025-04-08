//Pede ao usuário para digitar 2 notas e calcule sua média, e considere a média acima de 7
//aprovado, entre 5 e 7, em recuperação, abaixo de 5 reprovado.
const prompt = require('prompt-sync')()

let n1 = Number(prompt("qual o numero: "))
let n2 = Number(prompt("qual o numero: "))
let me = (n1 + n2)/2

switch(true){
    case me > 7:
    console.log("passou")
    break;
    case me ==6:
   console.log("recuperaçao")
   break;
   default:
    case me > 5:
    console.log("reprovado")
    break;
}