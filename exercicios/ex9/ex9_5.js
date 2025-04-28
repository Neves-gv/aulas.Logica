// Crie uma função que gere uma senha aleatória, deve receber como parâmetro a
// quantidade de caracteres que terá a senha, crie uma lista com todos os caracteres disponíveis
// para a senha e com o random sorteie a qual de dígitos terá a senha
function gerarSenha(tamanhos) {
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{};:,.<>?";
    let senha = "";

    for (let i = 0; i < tamanhos; i++) {
        let aleatoria = Math.floor(Math.random() * caracteres.length)
        senha += caracteres[aleatoria]
    }
    return senha;
}
console.log('Senha gerada de 6 caracteris:', gerarSenha(6));
console.log('Senha gerada de 6 caracteris:', gerarSenha(10));