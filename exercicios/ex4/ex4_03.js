//Pede ao usuário para digitar o número de um mês e imprime o seu nome.

const prompt = require('prompt-sync')()

let me = Number(prompt("qual o numero: "))
switch(true){
    case 1:
        console.log("janeiro")
        break;
    case 2:
        console.log("fevereiro")
        break;
    case 3:
        console.log("marco")
        break;
    case 4:
        console.log("abril")
        break;
    case 5:
        console.log("maio")
        break;
    case 6:
        console.log("junho")
        break;
    case 7:
        console.log("julho")
        break;
    case 8:
        console.log("agosto")
        break;
    case 9:
        console.log("setenbro")
        break;
    case 10:
        console.log("outubro")
        break;
    case 11:
        console.log("novembro")
        break;
        default:
    console.log("dezembro")
    break;
}