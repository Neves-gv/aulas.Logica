const prompt = require('prompt-sync')()

let ne = Number(prompt("qual o numero?")); 
console.log(` antecesor de ${ne} é ${ne-1} e o sucesor é ${ne+1}`);