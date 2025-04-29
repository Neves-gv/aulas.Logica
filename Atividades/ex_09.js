// Faça uma função que imprima na tela apenas os números ímpares entre 1 e 50.
function numerosimpares(){
    numerosimpares = 0
    while(numerosimpares <= 50){
        if(numerosimpares % 2 == 1){
            console.log(numerosimpares);
            
        }
        numerosimpares++
    }

}
numerosimpares()