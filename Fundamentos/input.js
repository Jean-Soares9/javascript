/**
 *  Input de dados via terminal
 *  Uso do pacote readline-sync
 * @autor Jean Andrade
 */

// importar o pacote

const input = require('readline-sync')

let nome

console.clear()

nome = input.question("Digite o seu nome:")
console.log(`Hello ${nome}`)