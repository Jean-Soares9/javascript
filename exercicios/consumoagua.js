/**
* Cálculo do consumo de água:
*@autor Jean Andrade
 */

// Importar a biblioteca readline-sync

const input = require('readline-sync')
//console.log(typeof(input))
// variaveis

let peso, consumo

// limpar a tela
console.clear()
console.log("Cálculo do consumo de água:")

//entrada

peso = Number(input.question("Digite seu peso(Kg): "))

//processamento

consumo = peso * 0.035 // (35ml de água por cada Kg)

//saida

console.log(`Consumo diário de água deve ser: ${consumo.toFixed(2)} litros`)