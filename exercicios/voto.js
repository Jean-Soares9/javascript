/**
 * Sistema de votos (obrigatoriedade)
 * @author Jean Andrade
 */
 
const input = require('readline-sync')

//variaveis
let idade

console.clear()
console.log("Verificar obrigatoriedade de voto")
 
idade = Number(input.question("Digite sua idade: "))

if (idade < 16) {
    console.log ("Proibido votar")
} else if(idade === 16 || idade === 17 || idade > 70){
    console.log("Voto facultativo")
} else {
    console.log("Voto obrigatorio")
}