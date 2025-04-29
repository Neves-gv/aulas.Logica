// // Escreva uma função que recebe um nome e o adicione a uma lista global. Em seguida,
// escreva outra função que remova um elemento dessa lista global.
var listName = ['VH', 'Esteves']
function Novalist(){
    listName.push('Godoi')
    console.log(listName) 
}
Novalist()
function Novalist(){
    listName.pop()
    console.log(listName)
}
Novalist()
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let listaname = []

// function adicionarnome(nome){
//     listaname.push(nome);
// }
// function removanome(){
//   listaname.pop()
// }
// function removerpornome(nome){
//     let posicao = listaname.indexOf(nome)
//     //quando o indexof não encontra o elemaento e ele retorna -1
//     if(posicao != -1){
//         listaname.splice(posicao, 1)
//     }
// }
// adicionarnome('Ana')
// adicionarnome('Camila')
// adicionarnome('Matheus')
// console.log(listaname)
// adicionarnome('Garro')
// console.log(listaname)
// removanome()
// console.log(listaname)
// removerpornome('Camila')
// console.log(listaname)