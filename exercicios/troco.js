/**
* Cálculo do Troco:
*@autor Jean Andrade
 */

 // Importar a biblioteca readline-sync

 const input = require('readline-sync')

 // variaveis
  
 let troco, valorpago, totalcompra
  
  
 console.clear()
 console.log("Cálcular o Troco de uma compra:")
  
 //entrada
 
 totalcompra = Number(input.question("Digite o valor da compra: "))
 valorpago = Number(input.question("Digite o valor pago: "))
 
 
  
 //processamento
  
 troco = valorpago - totalcompra
  
 //saida
  
 console.log(`O valor do troco é: R$ ${troco.toFixed(2)}`)