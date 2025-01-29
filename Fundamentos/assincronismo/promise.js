/**
 * Assincronismo
 * Promise
 * @author Jean Andrade
 */

const input = require('readline-sync')

let login, senha

// Estrutura de dados (simular um banco de dados)

const database = {
    admin: {
        usuario: "Administrador",
        senha: "password"
    },
    prof: {
        usuario: "Leandro Ramos",
        senha: "123456"
    }
}

// Autenticação de usuário
console.clear()
console.log("-----------------")
console.log("   USUÁRIO")
console.log("-----------------")
login = input.question("login: ")
senha = input.question("senha: ")
console.log("-----------------")

function logar(login, senha) {
    //uso de promise (acesso ao "banco de dados")
    return new Promise((resolv, reject) => {
        //simulação de delay no acesso ao banco
        setTimeout(() => {
            // se existir no banco de dados o usuário
            if (database.hasOwnProperty(login)) {
                // verificar se a senha está correta
                if (database[login].senha === senha) {
                    resolv("Autenticação bem sucedida. Olá, " + database[login].usuario)
                } else {
                    reject("Senha incorreta. Por favor tente novamente")
                }
            } else {
                reject("Usuário não encontrado. Por favor, verifique o login")
            }
        }, 2000)
    })
}

// executar a função logar
// no uso de promise é necessário usar o .them
logar(login, senha)
    .then((menssage) => {
        console.log(menssage)
    })
    .catch((error) => {
        console.log("Erro de autenticação. " + error)
    })