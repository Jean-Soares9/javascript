/**
 * Estuda das funções simples
 * @author Jean Andrade
 */


hello()
// função literal
function hello () {
    console.log("Hello function")
}
console.log(typeof(hello))

// função atribuida
// funções atribuidaa precisam ser criadas no inicio do código (antes da chamada da função)

const hello2 = function() {
    console.log("Hello2 function")
}
hello2()
console.log(typeof(hello2))

// Arrow function (forma simpificada de criar uma funçao atribuida)
const hello3 = () => {
    console.log("Hello3 function")
}
hello3()
console.log(typeof(hello3))

// Arrow function mais simplificada (neste caso só é possivel executar uma linha de código)
// Esta função é pouco utilizada

const hello4 = _ => console.log("Hello4 function")

hello4()
console.log(typeof(hello4))