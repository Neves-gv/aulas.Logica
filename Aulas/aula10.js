const prompt = require('prompt-sync')()

// Estrutura condicional aninhada
let idade = Number(prompt('Digite sua idade'))

if(idade >= 18 && idade <= 70){
    console.log('Voto Obrigatório')
}
else{
    if(idade < 16){
        console.log('Você nâo pode votar!')
    }else{
        if(idade >= 16 || idade > 70){
            console.log('Voto Obrigatório')
        }
    }
}

//Switch case estruturas para tomar decisoes
//com base no valor de for uma variavel

let n1 = Number(prompt('Digite um numero: '))
let n2 = Number(prompt('Digite um outro numero: '))
let op = Number(prompt('escolha a operacao(+, -, *, /, **) '));

//teste a valor da variavel se é true
switch(op){
  case '+':
   console.log(`resultado ${n1+n2}`)
   break;
   case '-':
    console.log(`resultado ${n1-n2}`);
    break;
    case '*':
    console.log(`resultado ${n1*n2}`);
   break;
   case '/':
    console.log(`resultado ${n1/n2}`);
    break;
    case '**':
    console.log(`resultado ${n1**n2}`);
   break;
   default:
    console.log('operaçao invalida')
}

//verifica qual letra é igual

let l = prompt('digite uma letra: ').toUpperCase()
switch(l){
  case 'A':
  case 'E':
  case 'I':
  case 'O':
  case 'U':
  console.log('vogal');
  break;
  default:
  console.log('consoante')
}

//converter a nota em numeros para letra
let nota = parseInt(prompt("digite a nota do aluno: "))
switch(true){
  case nota >= 90:
  console.log('Nota A')
  break;
  case nota >= 80:
  console.log('Nota b')
  break;
  case nota >= 70:
  console.log('Nota c')
  break;
  case nota >= 60:
 console.log('Nota d')
 break;
  default:
  console.log('Nota e')
}