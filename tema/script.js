/**
 * Uso do color-scheme para modificar o tema (claro-escuro)
 * Uso do "local storage" para armazenamento no banco de dados do navegador
 * @author Jean Andrade
 */

const html = document.querySelector('html')
// Uso do banco de dados do navegador
const tema = localStorage.getItem("mode")

// Capturar e implementar a preferencia do usuário (light ou dark)
if( tema === "light"){
    light()
}

if(tema === "dark"){
    dark()
}

function light() {
    html.style.setProperty("color-scheme", "light")
    localStorage.setItem("mode", "light")
}

function dark() {
    html.style.setProperty("color-scheme", "dark")
    localStorage.setItem("mode", "dark")
}

function auto() {
    html.style.setProperty("color-scheme", "light dark")
    localStorage.setItem("mode")
}