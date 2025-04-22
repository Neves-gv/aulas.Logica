// Crie uma função que gere uma senha aleatória, deve receber como parâmetro a
// quantidade de caracteres que terá a senha, crie uma lista com todos os caracteres disponíveis
// para a senha e com o random sorteie a qual de dígitos terá a senha
function gerarSenha(tamanho) {
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{};:,.<>?";
    let senha = "";

    for (let i = 0; i < tamanho; i++) {
        let indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }

    console.log(`Senha gerada: ${senha}`);
    return senha;
}
gerarSenha(10)
gerarSenha(16)
