/**
 *  Calculo da media aritmetica de 3 valores
 * @autor Jean Andrade
 */

// Importar a biblioteca readline-sync

const input = require('readline-sync')
const colors = require('colors')

// Variaveis

let num1, num2, num3, media

console.clear()
console.log("Calculo da media aritmetica de 3 numeros")

// entrada
// No console entradas(input) numéricas precisam ser convertidas com o uso do método Number()

num1 = Number(input.question("Digite o primeiro numero: "))
num2 = Number(input.question("Digite o segundo numero: "))
num3 = Number(input.question("Digite o terceiro numero: "))

// processamento

media = (num1 + num2 + num3) / 3

// saída

console.log(`Média: ${media.toFixed(2)}`)

if (media < 5){
    console.log("Reprovado".red)
}
else {
    console.log("Aprovado".blue)
}
