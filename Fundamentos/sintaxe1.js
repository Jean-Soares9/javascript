/**
 *  Sintaxe basica da linguagem JS
 * @autor Jean Andrade
 */

// Limpar a tela do console
console.clear()

// JS - Sentença
console.log("Hello World")

let nome = "Jean Andrade"
let idade = 35
// O ponto é usado para casas decimais
let altura = 1.80
// typeof() é usado para identificar o tipo de variavel

console.log(typeof(nome))
console.log(typeof(idade))
console.log(typeof(altura))

// identificando variáveis inteiras e não inteiras

console.log(Number.isInteger(idade))
console.log(Number.isInteger(altura))

// concatenação (unir textos e variáveis)

console.log(`Nome: ${nome}`)
console.log("Nome: " + nome) // Não recomendado

// Arredondamento (casas decimais)

let media = 5.789
console.log(`Media: ${media.toFixed(2)}`)

// Particularidades do JS

console.log(10 / 0)
console.log(0.5 + 0.5)
console.log(0.1 + 0.2)
console.log("3" + 2)
console.log("3" - 2)
console.log("3x" - 2)