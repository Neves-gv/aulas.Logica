// Crie um caixa eletrônico: Crie uma variável global para armazenar o saldo, crie função para
// depositar e sacar, recebendo o valor como parâmetro, crie outra função para consultar o
// saldo. Crie um menu interativo com while para navegar entre as funções:
// [1] Depositar
// [4] Parar programa
// [2] Sacar
// [3] Consultar saldo
// const prompt = require('prompt-sync')()
// saldodaconta = 0
// credito = 'usado'
// function sacar(quantidade){
// saldo -= quantidade
// }
// function depositar(quantidade){
//     saldo += quantidade
// }
// function quantidadenaconta(){
//     console.log(saldo)
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let saldo = 0;

//criar uma funçao deposito
function depositar(valorDepositado){
    saldo += valorDepositado;
}
//criar uma função saque
function sacar(valorsaque){
    saldo -= valorsaque
}
function mostrarsaldo(){
    console.log(`Seu saldo ${saldo}`)
}
//menu interativo
function caixaeletronico(){
    const prompt = require('prompt-sync')()
    let opcao = 0;
    while(opcao != 4){
        console.log('======= Caixa eletronico =====')
        console.log('[1] - depositar')
        console.log('[2] - sacar')
        console.log('[3] - mostrar saldo')
        console.log('[4] - sair')
        opcao = Number(prompt("Escolha uma opção:  "))

        switch(opcao){
            case 1:
                let valorDepositado =  Number(prompt("digite o valor depositado:  "))
                depositar(valorDepositado)
                break;
            case 2: 
              let valorsaque = Number(prompt("digite o valor para sacar:  "))
             sacar(valorsaque)
             break; 
            case 3:
                mostrarsaldo()
                break;
            case 4:
                console.log('onrigado por usar esse banco')
                break;
             default:
             console.log('opecao invalida')
        }
    }
}
caixaeletronico()