/**
 * Ficha de um aluno de academia
 * @autor Jean Andrade
 */

// biblioteca
const input = require('readline-sync')
const colors = require('colors')

// variaveis
let nome, idade, peso, altura, fcm, imc, consumo

// limpar a tela
console.clear()


console.log("_  _ ____ ___  __   ____ _  _   ____ ___  __   ____ _    __   ___  ____ ____ ____ ")
console.log("||_||\| __\|  \ | |  |_ _\||_|\  | __\|  \ | |  | __\|| \ | |  |  \ |_ _\|   || . \ ")
console.log("| _ ||  ]_| . \| |__  || | _ |  | \__| . \| |__| \__||_|\| |__| . \  || | . ||  <_")
console.log("|/ |/|___/|/\_/|___/  |/ |/ |/  |___/|/\_/|___/|___/|___/|___/|/\_/  |/ |___/|/\_/")

                                                                                
console.log("")

// entrada de dados
nome = input.question("Digite o seu nome: ")
idade = Number(input.question("Digite sua idade: "))
peso = Number(input.question("Digite seu peso em Kg: "))
altura = Number(input.question("Digite a sua altura em metros: "))


// processamento
fcm = 208 - (0.7 * idade)
imc = peso / (altura * altura)
consumo = peso * 0.035

// saida
console.log("Ficha do aluno")
console.log("_________________________")
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`FCM: ${fcm}`)
console.log(`IMC: ${imc.toFixed(2)}`)

// tabela IMC
if (imc < 18.5) {
    console.log("Abaixo do peso".cyan)
} else if (imc < 25) {
    console.log("Peso normal".green)
} else if (imc < 30) {
    console.log("Levemente acima do peso".yellow)
} else if (imc < 35) {
    console.log("Obesidade grau I".magenta)
} else if (imc < 40) {
    console.log("Obesidade grau II (severa)".red)
} else {
    console.log("Obesidade grau III (mórbida)".bgRed)
}
// consumo de água
console.log(`Consumir por dia ${consumo.toFixed(3)}litros de água`)