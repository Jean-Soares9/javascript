/**
* PDV:
*@autor Jean Andrade
 */

 // Importar a biblioteca readline-sync

 const input = require('readline-sync')

 let total, desconto, totaldesconto, valordesconto, valorpago, troco

 console.clear()
 
 
console.log("______________________   ____ ")
console.log("\\______   \\______ \\   \\ /   /")
console.log(" |     ___/|    |  \\   Y   / ")
console.log(" |    |    |    `   \\     /  ")
console.log(" |____|   /_______  /\\___/   ")
console.log("                  \\/          ")
console.log("")

// entrada 1

total = Number(input.question("Digite o valor total da compra: "))
desconto = Number(input.question("Digite o valor do desconto em %: "))

// processamento 1

valordesconto = (total * desconto) / 100

// processamento 2

totaldesconto = total - valordesconto

// saída 1

console.log("")
console.log("---------")
console.log(`Total: R$ ${total.toFixed(2)}`)
console.log(`Desconto: ${desconto}%`)
console.log(`Valor do desconto: R$ ${valordesconto.toFixed(2)}`)
console.log(`Total com desconto: R$ ${totaldesconto.toFixed(2)}`)

// entrada 2

valorpago = Number(input.question("Valor em dinheiro pago pelo cliente: "))

// processamento 3

troco = valorpago - totaldesconto

// saída 2

console.log("")
console.log(`Valor pago em dinheiro: R$ ${valorpago.toFixed(2)}`)
console.log(`Troco: R$ ${troco.toFixed(2)}`)