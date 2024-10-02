/**
* Cálculo do volume de um aquário:
*@autor Jean Andrade
 */

 // Importar a biblioteca readline-sync

 const input = require('readline-sync')

 // variaveis
  
 let comprimento, largura, altura, volume
  
  
 console.clear()
 console.log("Cálculo do volume de um aquário:")
  
 //entrada
 
 comprimento = Number(input.question("Digite o comprimento em cm: "))
 largura = Number(input.question("Digite a largura em cm: "))
 altura = Number(input.question("Digite a altura em cm: "))
 
  
 //processamento
  
 volume = (comprimento * largura * altura) / 1000
  
 //saida
  
 console.log(`Volume do Aquario: ${volume} litros`)