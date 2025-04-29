//Faça um algoritmo que verifique se uma letra digitada é "F" ou "M". 
// Conforme a letra escrever: F - Feminino, M – Masculino, se não for nenhuma das opções, Sexo Inválido.
const prompt = require('prompt-sync')()
let Sexo = prompt('Digite seu sexo se for Feminino escreva F e se for Mascolino escreva M:  ')
if(Sexo == 'F'){
    console.log('Voce é do sexo Feminino')
}else if(Sexo == 'M'){
    console.log('Voce é do sexo Mascolino')
}else{
    console.log('Sexo Inválido')
}