// Escreva uma função que recebe um nome e o adicione a uma lista global. Em seguida,
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