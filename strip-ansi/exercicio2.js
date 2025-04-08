//Exerciciios de variaveis
const prompt = require('prompt-sync')();

let NomeAluno = 'Teste'
let Altura = 1.75 
let Escola = "Sesi"
let Ano = 2025

NomeAluno = prompt('Qual é o nome do aluno?')
Altura = prompt('qual sua altura?')
Escola = prompt('Qual sua escola?')
Ano = prompt('qual ano ?')

console.log(`Qual é o nome do aluno? ${NomeAluno}, Qual sua altura? ${Altura}, Qual sua escola? ${Escola}, qual Ano escolar? ${Ano} `);

let nomeProfessor = "ed"
let materia = "MAtematica"
let anoingresso = 2020
console.log(`Qual é o nome do professor? ${nomeProfessor}, Qual sua materia ? ${materia}, Qual ano ingresso? ${anoingresso}`);

//REatribuindo valores as nossas variaveis
nomeAluno = prompt('Digite o nome do aluno')
altura = perseFloat(prompt('digite a autura'))
escola = prompt('nome da escola')
ano = parseInt(prompt("digite o ano da turma"))
console.log(`A aluna ${nomeAluno}, tem ${altura}, Qual sua escola? ${escola}, qual ano${ano}`)

NomeProfessor = prompt("nome do prfessor")
Materia = prompt("digite o nome da materia")
Anoingresso = parseInt(prompt("digite o ano de ingresso"))
console.log(`nome do prfessor ${NomeProfessor}, digite o nome da materia ${Materia}, digite o ano de ingresso ${Anoingresso}`)
