//Importano a biblioteca para entrada de dados
const prompt = require('prompt-sync')();

//recer e amazenaro texto
let curso = "desenvolvimento de sistema"
//tipo e nome recebe valor na variavel

//exibir o valor armazenado
console.log("curso") //imprimo uma string(texto)
console.log(curso) //imprimi o valor que esta dentro da variavel
console.log("curso", curso);

//criando e atribuindo valor a outras variavesis 
let idade = 15 // valor do tipo int
let temperatura = 23.5 //valor do tipo float
let nome = "Neves"
let peso = 65.28
console.log("ola", nome, "voce tem", idade, "e hoje esta fazendo", temperatura, "ºC")

//usando teplate string
console.log(`ola ${nome}, voce tem ${idade} e hoje esta fazendo ${temperatura} ºC`);

let dia = true;
let chovendo = false;
//as constante não podem ser retribuidos novos valores
const PI = 3.1415;
console.log(PI)

//utilizando promt para receber dados
//Entrega de dados

//no promt sempre recebemos uma string
nome = prompt('Qual é seu nome?')
idade = prompt(prompt('Qual sua idade?'))
peso = parseFloat(prompt('qual seu peso ?'))

console.log(`seu nome é ${nome}, você tem ${idade} e peso ${peso}`)
console.log(typeof(idade))
console.log(typeof(peso))
//apos a coversão dos valores é possivel realizar
//calculos matmaticos
console.log(idade + peso);
