/**
* Calculo do valor de uma corrida de taxi:
*Desenvolva um programa que calcule o valor de uma corrida de táxi.
*O usuário deve fornecer a distância percorrida (km) e o valor fixo por quilômetro.
*O programa deve calcular e exibir o valor total da corrida.
 *@autor Jean Andrade
 */

 // Importar a biblioteca readline-sync

const input = require('readline-sync')

// variaveis
 
let valorc,distancia,valorkm
 
 
console.clear()
console.log("Cálculo do valor de uma corrida de taxi")
 
//entrada

valorkm = Number(input.question("Taxa por Km: "))
distancia = Number(input.question("Distancia percorrida: "))

 
//processamento
 
valorc = valorkm * distancia
 
//saida
 
console.log(`Valor total: R$ ${valorc.toFixed(2)}`)