//Pede ao usuário o ano atual e o ano de nascimento e verifique em qual faixa etária ele pertence 
// considerando (abaixo de 10 é criança, de 11 a 17 adolescente, de 18 a 59 adulto, acima de 60 idoso)

const prompt = require('prompt-sync')()

let idade = Number(prompt("qual sua idade: "))

switch(true){
    case idade<=10:
    console.log("vc é uma criança ")
    break;
    case idade<=17:
    console.log("vc é adolescente ")
    break;
    case idade<=59:
    console.log("vc é adulto ")
    break;
    default:
    case idade>=60:
    console.log("vc é idoso ")
    break;
}