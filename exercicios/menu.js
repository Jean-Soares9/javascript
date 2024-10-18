/**
* Exemplo de uso da estrutura switch case
*@autor Jean Andrade
 */

 // Importar a biblioteca readline-sync

 const input = require('readline-sync')

 // variaveis
  
 let opcao
  
  
 console.clear()
 console.log("BOOT")
 console.log("1. Carregar o sistema Windows")
 console.log("2. Carregar o sistema Linux")
  
 //entrada
 
 opcao = Number(input.question("Digite a opção desejada: "))
 
 //processamento
  
 switch(opcao) {
    case 1:
        console.clear()
        console.log("Carregando o sistema Windows.....")
        break
    case 2:
        console.clear()
        console.log(" .88888888:")
        console.log("88888888.88888.")
      console.log(".8888888888888888.")
      console888888888888888888
      88' _`88'_  `88888
      88 88 88 88  88888
      88_88_::_88_:88888
      88:::,::,:::::8888
      88`:::::::::'`8888
     .88  `::::'    8:88.
    8888            `8:888.
  .8888'             `888888.
 .8888:..  .::.  ...:'8888888:.
.8888.'     :'     `'::`88:88888
.8888        '         `.888:8888.
888:8         .           888:88888
.888:88        .:           888:88888:
8888888.       ::           88:888888
`.::.888.      ::          .88888888
.::::::.888.    ::         :::`8888'.:.
::::::::::.888   '         .::::::::::::
::::::::::::.8    '      .:8::::::::::::.
.::::::::::::::.        .:888:::::::::::::
:::::::::::::::88:.__..:88888:::::::::::'
`'.:::::::::::88888888888.88:::::::::'
`':::_:' -- '' -'-' `':_::::'`

        break
    default:
        console.log("Opção invalida")
 }
  
