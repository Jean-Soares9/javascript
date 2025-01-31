/**
 *  Uso de async - await (sintaxe moderna do JS para lidar com assincronismo)
 */

//Biblioteca nativa do JS para Trabalhar com arquivos
const fs = require('fs')

function criarArquivo() {
    let conteudo = "Jean Andrade\nExemplo de uso dos novos recursos de assincronismo no JS (async - await"
    graverArquivo("teste.txt", conteudo)
}

async function graverArquivo(path, conteudo) {
    try {
        await fs.promises.writeFile(path, conteudo)
        console.log("Arquivo gravado com sucesso")
    } catch (error) {
        console.log(error)
    }
}

console.clear()
criarArquivo()