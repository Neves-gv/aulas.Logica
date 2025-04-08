const prompt = require('prompt-sync')()

//operações com variaveis
let nr1 = Number(prompt("qual o numero?")); 
let nr2 = Number(prompt("qual o numero?")); 

let soma = nr1 + nr2;
console.log( `A soma entre ${nr1} + ${nr2} é igual: ${soma}`);

let subtracao = nr1 - nr2;
console.log( `A subtracao entre ${nr1} - ${nr2} é igual: ${subtracao}`);

let multiplicao = nr1 * nr2;
console.log( `A multiplicaoentre ${nr1} * ${nr2} é igual: ${multiplicao}`);

let divisao = nr1 / nr2;
console.log( `A divisao entre ${nr1} % ${nr2} é igual: ${divisao}`);

let expotenciacao = nr1 ** nr2;
console.log( `A expotenciacao entre ${nr1} ** ${nr2} é igual: ${expotenciacao}`);
//calculando valor do celular desconto
let valor = Number(prompt("digite o valor do telefone:"));
let desconto = Number(prompt("digite o valor do desconto:"));
valor = valor - desconto
console.log(`o valor do celular com desconto é R$${valor}`)

//exercicios:
let N1 = Number(prompt("qual o numero?")); 
let resutado = N1 * 2;
console.log( `${N1} * ${2} é igual: ${resutado}`);
let resutado2 = N1 / 2;
console.log( `${N1} / ${2} é igual: ${resutado2}`);

//exercicios2:
let horas_pordia = 8;
let dias_totais = 15;
let horas_trabalho = horas_pordia * dias_totais
let custo_hora = 100;
let custo_total = horas_trabalho * custo_hora


console.log(custo_total)

