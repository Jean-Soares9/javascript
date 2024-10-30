/**
 * Jokenpo
 * @author Jean Andrade
 */

const input = require('readline-sync')

//variaveis

let jogador, computador, opcao

do {
    console.clear()
    console.log('_____Jokenpo_______')
    console.log("1, pedra")
    console.log("2, papel")
    console.log("3, Tesoura")


    // Logica do jogador
    jogador = Number(input.question("Digite a opcao desejada: "))
    console.log("")
    switch (jogador) {
        case 1:
            console.log("Jogador escolheu pedra")
            break
        case 2:
            console.log("Jogador escolheu papel")
            break
        case 3:
            console.log("jogador escolheu tesoura")
            break
        default:
            console.log("Opcao invalida")
            break
    }

    //logica do computador
    computador = Math.floor(Math.random() * 3 + 1)

    switch (computador) {
        case 1:
            console.log("computador escolheu pedra")
            break
        case 2:
            console.log("computador escolheu papel")
            break
        case 3:
            console.log("computador escolheu tesoura")
            break
        default:
            console.log("Opcao invalida")
            break
    }

    // Logica para determinar o vencedor declara empate
    if (jogador === computador) {
        console.log("Empate")
    } else if (jogador === 1 && computador === 3 || jogador === 2 && computador === 1 || jogador === 3 && computador === 2) {
        console.log("Jogador venceu")
    } else {
        console.log("computador venceu ")
    }

opcao = input.question("Deseja jogar novamente(s/n)")

} while (opcao === 's');

