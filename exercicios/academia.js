/**
 * Ficha de um aluno de academia
 * @autor Jean Andrade
 */

// variaveis
let nome
let idade
let peso
let altura
let vip
let fcm
let imc

console.clear()

// entrada de dados
nome = "Jean Andrade"
idade = 35
peso = 88
altura = 1.80
vip = true

// processamento
fcm = 208 - (0.7 * idade)
imc = peso / (altura * altura)

// saida
console.log("Ficha do aluno")
console.log("_________________________")
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`Vip: ${vip}`)
console.log(`FCM: ${fcm}`)
console.log(`IMC: ${imc.toFixed(2)}`)