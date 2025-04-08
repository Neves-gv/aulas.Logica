//Pede ao usuário para digitar o nome de um mês e imprime o número de dias naquele mês.
const prompt = require('prompt-sync')()

let nm = prompt("qual o nome do mes: ")

switch(nm){
    case 'janeiro':
    case 'marco':
    case 'maio':
    case 'julho':
    case 'agosto':
    case 'outubro':
    case 'desembro':
        console.log("tem 31 dias")
        break;
    case 'abril':
    case 'junho':
    case 'setembro':
    case 'novembro':
        console.log("tem 30 dias")
        break;
        default:
        case 'fevereiro':
        console.log("tem 28 dias")
    }