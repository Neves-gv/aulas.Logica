// Crie um caixa eletrônico: Crie uma variável global para armazenar o saldo, crie função para
// depositar e sacar, recebendo o valor como parâmetro, crie outra função para consultar o
// saldo. Crie um menu interativo com while para navegar entre as funções:
// [1] Depositar
// [4] Parar programa
// [2] Sacar
// [3] Consultar saldo
const prompt = require('prompt-sync')()
saldodaconta = 0
credito = 'usado'
function sacar(quantidade){
saldo -= quantidade
}
function depositar(quantidade){
    saldo += quantidade
}
function quantidadenaconta(){
    console.log(saldo)
}