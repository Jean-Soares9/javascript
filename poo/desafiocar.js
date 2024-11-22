/**
 *  Fundamentos da POO
 *  Desafio_Car
 * @author Jean Andrade
 */

console.clear()

// criando a classe modelo

class Carro {
    //atributos
    constructor(ano, cor) {
        this.ano = ano
        this.cor = cor
    }
    //metodos
    criarCarro() {
        console.log("------------------------------------------------")
        console.log("🚗🚗")
        console.log(`Carro fabricado em ${this.ano}`)
        console.log(`Cor: ${this.cor}`)
    }

    ligar() {
        console.log("Carro deu a partida 🔑!")
    }

    desligar() {
        console.log("Carro parou para abastecer ⛽!")
    }

    acelerar() {
        console.log("Pisando fundo em direçao a 🏎️🏖️")
    }
}

// Herança

class Aviao extends Carro {
    //atributos
    constructor(ano, cor, envergadura) {
        super(ano, cor) //herança
        this.envergadura = envergadura
    }
    criarAviao() {
        console.log("--------------------------------------------")
        console.log("🛩️🛩️🛩️")
        console.log(`Aviao fabricado em ${this.ano}`)
        console.log(`Cor: ${this.cor}`)
        console.log(`Envergadura: ${this.envergadura}`)
    }

    aterrizar() {
        console.log("🛬  Aperte os cintos 🛬!")
    }

    //Polimorfismo: Mudança de comportamento de um método que já existe na 
    //classe pai(modelo) no exemplo Bloco
    //Atenção!!! Obrigatório usar o mesmo nome do método
    acelerar() {
        console.log("✈️  Avião decolou! ✈️")
    }
        
}

/****** Desafio_Car_Plane ******/

console.log("_________               __________.__                        ")
console.log("\\_   ___ \\_____ _______\\______   \\  | _____    ____   ____  ")
console.log("/    \\  \\/\\__  \\_  __ \\ |     ___/  | \\__  \\  /    \\_/ __ \\ ")
console.log("\\     \\____/ __ \\|  | \/ |    |   |  |__/ __ \\|   |  \\  ___/ ")
console.log(" \\______  (____  /__|____|____|   |____(____  /___|  /\\___  >")
console.log("        \\/     \\/  /_____/                  \\/     \\/     \\/ ")
console.log("")

//Instaciando (criando) um objeto
const carro1 = new Carro(2020, "prata")
carro1.criarCarro()
carro1.ligar()
carro1.desligar()

const carro2 = new Carro(2024, "azul")
carro2.criarCarro()
carro1.ligar()
carro1.desligar()
carro2.acelerar()

const aviao = new Aviao(2024, "branco", 12)
aviao.criarAviao()
aviao.aterrizar()
aviao.acelerar()

