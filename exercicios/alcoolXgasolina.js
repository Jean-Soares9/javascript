/**
* Cálculadora Álcool x Gasolina
*@autor Jean Andrade
 */

 // Importar a biblioteca readline-sync

 const input = require('readline-sync')

 // variaveis
  
 let alcool, gasolina, resultado
  
  
 console.clear()
 console.log("Cálculadora Álcool x Gasolina:")
 console.log("Quando o resultado é menor que 0.7 a recomendação é abastecer com álcool. Se maior, a recomendação é escolher a gasolina!")
  
 //entrada
 
 alcool = Number(input.question("Digite o valor do alcool: "))
 gasolina = Number(input.question("Digite o valor da gasolina: "))
 
 
  
 //processamento
  
 resultado = alcool / gasolina
  
 //saida
  
 console.log(`Resultado: ${resultado.toFixed(2)}`)

 if (resultado < 0.7){
    console.log("Vale mais a pena usar o Alcool")
 }
 else{
    console.log("Vale mais a pena usar a Gasolina")
 }