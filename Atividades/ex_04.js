//Faça um algoritmo que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. 
// Calcule em uma nova variável e mostre o total do seu salário no referido mês.
const prompt = require('prompt-sync')()
let Tb = Number(prompt("quanto voce ganha por hora:  "))
let tm = Number(prompt("quantas horas voce trabalha no mes:  "))
let salario = Tb * tm
console.log(`R$${salario}`)