//declarando um novo vetor
//reconheço que é um vetor pelo uso dos cochetes
let listavazia = [];
console.log(listavazia)

//declarando uma lista  de numeros 
let numeros = [1,2,3,4,5,6];
console.log(numeros[2])

//declarando uma lista de string
let nomes = ["Ana", "João", "Maria"];
console.log(nomes);

//declaração se uma lista mista 
let listamista = [1, "dois", true, 2.5]
console.log(listamista);

let listacomlista = [
    ["coca-cola", "cachorro-quenta"]
    [5.0, 10.0]
]
console.log(listacomlista)

//Alterando valores da lista
let frutas = ['maca', 'pera', 'uva', 'abacaxi']
console.log(frutas);

//A função punsh adiciona um novo elemento
frutas.push('laranja')
console.log(frutas);

//o spread adiciona um novo elemento
frutas = [...frutas, 'banana']
console.log(frutas);

//a função splice adiciona um novo item em uma posiçao especifica a partir de um valor no indice
frutas.splice(2, 0, 'morango')
console.log(frutas)

//excluindo item na lista
frutas.splice(3,1) //excluindo item pelo indice
console.log(frutas)
frutas.shift()//excluindo primeiro item da lista
frutas.pop()//excluindo ultimo item
console.log(frutas);

//acessar os itens da lista 
console.log(frutas[3]);//acesso a partir uma posiçao expecifica
console.log(frutas.slice[0,4]);//a partir de 0 a 4
console.log(frutas.slice[1]);//a partir da posi1
console.log(frutas.slice[-1]);//mostra os itens do fim para o inicio
console.log(frutas.length);//total de itens na lista

//ordenar itens da lista 
console.log(frutas)
frutas.sort()//ORDERNAR A ISTA DE FORMA CRECENTE
console.log(frutas);
frutas.reverse()//ordernando de forma decrescente
console.log(frutas);
