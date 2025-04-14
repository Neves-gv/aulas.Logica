let f = ['maça', 'banana', 'uva', 'abacaxi']

//a variavel x serve para interar ate o limite da lista
//o nome não é obrgatorio ser o nome i, x ou contador
for(let x = 0; x < f.length; x++){
    //o length identifica o tamanho total da lista 
    console.log(`a fruta é ${f[x]}`)
}

let ln = ['Bill Gaes', 'Rafinha', 'Raul Seixas', 'Esteves', 'Viera']
//para cada nome da lista ln, escreva um nome
for(let nome of ln){
    console.log(nome)
}

//verificando se é uma consoant
//lista de vogais
const prompt = require('prompt-sync')()
let vogais = ['a', 'e', 'i', 'o', 'u']
//se letra estiver incluso na lista de vogais, identifico que é uma vogal
let letra = prompt('digite uma letra: ')
if(vogais.includes(letra.toLowerCase())){
    console.log('é uma volgal')
}

let consoantes = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'X', 'Z']

let l = prompt('digite uma letra: ')
if(consoantes.includes(l.toLowerCase())){
}else if(vogais.includes(l.toLowerCase())){
    console.log('é uma volgal')}
else{console.log('não é um aletra');}

//correção
if(consoantes.includes(c.toLocaleLowerCase())){
        console.log('É uma vogal ?')
}else if(consoantes.includes(letra.toLocaleLowerCase())){
       console.log('Consoante')}   else{console.log('Não e uma letra')}

 // obtendo a posição do item
 for(let[pos,fruta] of frutas.entries()){
    // entries retorna o par de cada elemento do vetor
    // ou seja a posição e a fruta
    console.log(`Posição ${pos} e frutas ${fruta}`)
}

// separando os itens em uma lista
let produto = 'Celular, Notbook, TV, Tablet, Headset'
// O split divide a string e forma uma lista a partir do limita
// no caso abaixo uma virgula
let listaProdutos = produto.split(',')
for(let produto of listaProdutos){
    console.log(produto)
}

//Percorrendo uma string com uma lista(lista de caracteres)
let palavra =  'SENAI'
for(let letra of palavra ){
    console.log(letra)
}