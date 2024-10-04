/**
* Preço com desconto:
*@autor Jean Andrade
 */

 // Importar a biblioteca readline-sync

 const input = require('readline-sync')

 // variaveis
  
 let precooriginal, percentualdesconto, valorcomdesconto
  
  
 console.clear()
 console.log("Calculo do preço com desconto")
 console.log("Valor com Desconto = Preço Original - (Preço Original * Percentual de Desconto%) / 100")
  
 //entrada
 
 precooriginal = Number(input.question("Digite o valor do Preco Original: "))
 percentualdesconto = Number(input.question("Digite o valor do Percentual de Desconto: "))
 
 
  
 //processamento
  
 valorcomdesconto = precooriginal - (precooriginal * percentualdesconto) / 100
  
 //saida
  
 console.log(`Valor com Desconto: ${precooriginal} - (${precooriginal} * ${percentualdesconto}%) = ${valorcomdesconto.toFixed(2)}`)