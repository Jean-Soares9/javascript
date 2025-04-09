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

//==================================================
console.clear()

// percorrendo um vetor
let notas = [3, 8, 5, 9, 2]
console.log(notas)
console.table(notas)

// laço for
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}

// laço forEach (simplificação do for exclusiva para percorrer o vetor)
notas.forEach((n) => {
    console.log(n)
})

// mapeamento map() (forEach + alteração do vetor)
// Exemplo 1: Adicionar 1 ponto a cada nota
let notasAtualizadas = notas.map((na) => {
    return(na + 1)
})

console.log(notas)
console.log(notasAtualizadas)

// Exemplo 2: Conversão de sistema de pontos para letras
/*
    SENAC:
    NA: Não atendeu (nota < 5)
    PA: Parcialmente atendido (nota entre 5 e 7)
    A: Atendeu (nota > 7)
*/

let notasConvertidas = notas.map((nc) => {
    if (nc < 5) {
        return("NA")
    } else if (nc > 7) {
        return("A")
    } else {
        return("PA")
    }
})