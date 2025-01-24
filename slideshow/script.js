/**
 * Slide show
 * @author Jean Andrade
 */

// array(vetor) de imagens
let slides = ["banner1.jpg", "banner2.jpg", "banner3.jpg"]
let intervalo = 3000 // (3000ms = 3s (1s por imagem))
let indice = 0 // apoio a lógica (indice do array)



// funçao para troca das imagens
function show() {
    // capturar o id do banner
    const slide = document.getElementById('slide')

    // Efeito de entrada
    // A estrutura abaixo verifica se foi atribuída a classe ('slideOut')ao identificador #slide
    if (slide.classList.contains('slideOut')) {
        slide.classList.remove('slideOut')
    }
    slide.classList.add('slideIn')

    // Troca de imagem
    // Temporizador (nativo do JS)
    setTimeout(() => {
        // soma 1 ao indice do vetor 
        indice++
        // se o último slide do vetor for atingido, voltar para o 0
    if (indice >= slides.length) {
            indice = 0
        }
        // substituir a imagem no documento html pela proxima imagem do vetor
        slide.src = `img/${slides[indice]}`

    }, 1000) // Ajuste (sicronizar com o CSS)

    // Efeito saída
    if (slide.classList.contains('slideIn')) {
        slide.classList.remove('slideIn')
    }
    slide.classList.add('slideOut')

    // Intervalo para próxima execução (loop infinito)
    setTimeout(show, intervalo)
}

// executar a função ao iniciar o documento js
show()