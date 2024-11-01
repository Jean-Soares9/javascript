/**
 * Exemplo de uso do metodo para gerar números aleatórios
 * e uso da estrtura do While
 * Jogo do dado
 *  @autor Jean Andrade
 */

const input = require('readline-sync')

let face, opcao

do {
    console.clear()
    console.log("Jogo do dado")
    input.question("Pressiobe a tecla [Enter} para jogar o dado")

    // Sorteio da face de um dado
    // Math classe matematica
    // floor() conversão para números inteiros
    // random() * (gerador de números aleatórios)

    face = Math.floor(Math.random() * 6 + 1) // 0 1 2 3 4 5
    console.log(`Face do dado ${face}`)

    opcao = input.question("Deseja jogar novamente(s/n)")
} while (opcao === 's');
