// Crie um algoritmo que receba em variável global o valor atual do dólar e do euro, crie uma
// função que receba o valor a ser convertido e imprima a conversão em dólar e em euro
var doler = 5.67
var euro = 6.44
function conversao(v){
console.log(+ (v / doler))
console.log(+ (v / euro))
}
conversao(1000)