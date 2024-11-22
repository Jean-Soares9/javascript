/**
 * Fundamentos da POO
 * Encapsulamento(segurança)
 * @author Jean Andrade
*/
 
console.log()
 
class User{
    //atributos
    constructor(login,senha){
        this.login = login
        //encapulamento ( O _"Underline" enjaula a variavel)
        let _senha = senha
        this.getSenha = () => _senha //leitura
        this.setSenha = (novaSenha) => _senha = novaSenha
    }
    //metodo
    logar(){
        console.log("____________________")
        console.log(`Usuario: ${this.login}`)
        console.log(`Senha: ${this.getSenha()}`)
        if (this.login === 'admin' && this.getSenha() === '123@senac') {
            console.log("Usuario autenticado")
        } else {
            console.log("Usuario e/ou senha invalida(s)")
        }
    }
}
 
 
/*** SISTEMA *****/
//CRIANDO UM NOVO OBJETO
const user1 = new User("admin", "1234")
user1.logar()
user1.setSenha("123@senac")
user1.logar()