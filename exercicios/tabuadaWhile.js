/**
 * Tabuada usando a estrutura While
 * @author Jean Andrade
 */
 
const input = require('readline-sync')
let valor
let i = 1 //apoio a logíca e laço while
 
console.clear()
console.log ("Tabuada While")
 
valor = Number (input.question("Digite o valor da tabuada: "))
 
while(i < 11) {
    console.log(`${valor} x ${i} = ${valor * i}`)
    i++
}