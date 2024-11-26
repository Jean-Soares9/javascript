/**
 * Estrutura de dados 
 * Array
 * @author Jean Andrade
 */

//                 [0]     [1]     [2]     [3]     [4]
let alunosEm1 = ["Tania","Pedro","Maria","João","Viviane"]

console.clear()
console.log(typeof(alunosEm1))
console.log(alunosEm1)
// o comando abaixo indentifica o numero de elementos de um vetor 
console.log(alunosEm1.length)
// o comando abaixo exibe o indice do array associado ao elemento
console.table(alunosEm1)
console.log(alunosEm1[2])
// o comando abaixo adiciona um elemento ao vetor 
alunosEm1.push("Jorge")
console.table(alunosEm1)
// para alterar um elemento do vetor, é necessario usar o indice 
alunosEm1[3] = "Joãozinho"
console.table(alunosEm1)
// o camando abaixo remove o ultimo elemento do vetor
alunosEm1.pop()
console.table(alunosEm1)
//removendo um elemento especifico sem alterar o indice, 
//neste caso é necessario fornecer o indice do elemento a ser excluido
delete alunosEm1[1]
console.table(alunosEm1)