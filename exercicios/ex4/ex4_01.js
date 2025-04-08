const prompt = require('prompt-sync')()

let ds = Number(prompt('digite um numero 1 ate 7: '));

switch(ds){
    case ds=1:
        console.log("segunda")
        break;
    case ds=2:
        console.log("terca")
        break;
    case ds=3:
        console.log("quarta")
        break;
    case ds=4:
        console.log("quinta")
        break;
    case ds=5:
        console.log("sexta")
        break;
    case ds=6:
        console.log("sabado")
        break;
 default:
    console.log("domingo")
}