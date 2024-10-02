/**
* Cálculo do consumo de combustível:
*@autor Jean Andrade
 */

 // Importar a biblioteca readline-sync

 const input = require('readline-sync')

 // variaveis
  
 let distancia, litros, consumo
  
  
 console.clear()
 console.log("Cálculo do consumo de combustível:")
  
 //entrada
 
 distancia = Number(input.question("Distancia percorrida em Km: "))
 litros = Number(input.question("Quantidade de litros de conbustivel: "))
 
 
  
 //processamento
  
 consumo = distancia / litros
  
 //saida
  
 console.log(`Consumo do veiculo: ${consumo.toFixed(1)} Km/l`)