const Prompt = require('prompt-sync')()

somap = 0;
somai =0;
qtdp = 0;
qtdi = 0;
let entrada = 0;

for(let i=0; i<=5; i++){
    entrada = Number(Prompt("digite um numero: "))
    if(entrada % 2 == 0){
        somap += entrada;
        qtdp++
    }
    else{
        somai += entrada;
        qtdi++
    }
}
console.log(`soma de ${qtdp} é ${somap}`)
console.log(`soma de ${qtdi} é ${somai}`)