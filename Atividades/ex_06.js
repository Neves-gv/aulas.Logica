//Tendo como dado de entrada a altura (h) de uma pessoa e o sexo, construa um algoritmo que calcule seu peso ideal, 
// utilizando as seguintes fórmulas: 
//Para homens: (72.7 * altura) – 58	 Para mulheres: (62.1 * altura) - 44.7, exiba qual é o peso ideal da pessoa
const prompt = require('prompt-sync')()
let Sexo = prompt('Digite seu sexo se for Feminino escreva F e se for Mascolino escreva M:  ')
let altura = Number(prompt("digite a sua altura:  "))
if(Sexo == 'F'){
    console.log(((62.1 * altura))-44.7)
}else if(Sexo == 'M'){
    console.log((72.7 * altura)-58)
}