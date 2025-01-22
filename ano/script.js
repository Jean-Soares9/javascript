/**
 * Ano automático
 * @author Jean Andrade
 */

// inserindo o ano na tag <span>
let ano = document.getElementById('copyrightYear')
let anoAtual = new Date().getFullYear()
ano.innerHTML = anoAtual