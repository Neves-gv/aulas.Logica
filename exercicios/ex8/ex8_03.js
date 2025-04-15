//Ex07_03.js Crie uma lista com os meses e imprima apenas os meses que começam com "J".
let meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
let mj = 'j'
for(let mes of meses){
    if(mes.includes(mj)){
    console.log(mes)
}
}

