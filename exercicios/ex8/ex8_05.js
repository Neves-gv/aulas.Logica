//Ex07_05.js Crie uma lista com 5 números aleatórios e exiba o nr e seu dobro.
let n = []

for(let i = 0; i< 5; i++){
    let nA = Math.floor(Math.random() * 100) + 1
    n.push(nA)
    console.log(`O dobro de ${n[i]} : ${n[i] * 2}`)
}