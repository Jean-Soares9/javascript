// script.js

// Função para validar o e-mail
function validarEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

// Função para validar CPF (básica, apenas para verificar se tem 11 dígitos)
function validarCPF(cpf) {
  return cpf.length === 11; // Aqui validamos apenas a quantidade de caracteres (11), mas pode-se adicionar mais regras
}

// Função para validar o telefone (11 dígitos)
function validarTelefone(telefone) {
  const regexTelefone = /^\d{11}$/; // Verifica se tem exatamente 11 dígitos numéricos
  return regexTelefone.test(telefone);
}

// Função para buscar CEP e preencher o campo UF
async function buscarCep() {
  const cep = document.getElementById('cep').value;
  if (cep.length === 8) {
      const url = `https://viacep.com.br/ws/${cep}/json/`;
      const response = await fetch(url);
      const data = await response.json();

      if (!data.erro) {
          document.getElementById('endereco').value = data.logradouro;
          document.getElementById('bairro').value = data.bairro;
          document.getElementById('cidade').value = data.localidade;
          document.getElementById('uf').value = data.uf;
      } else {
          alert('CEP não encontrado!');
      }
  } else {
      alert('Por favor, insira um CEP válido.');
  }
}

// Função de validação do formulário
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
  const nome = document.getElementById('nome').value;
  const fone = document.getElementById('fone').value;
  const email = document.getElementById('email').value;
  const cpf = document.getElementById('cpf').value;
  const numero = document.getElementById('numero').value; // Obtém o número do endereço
  
  // Validar campos obrigatórios
  if (!nome || !fone || !email || !cpf || !numero) { // Verifica se o número foi preenchido
      alert('Por favor, preencha todos os campos obrigatórios.');
      event.preventDefault(); // Impede o envio do formulário
      return;
  }

  // Validar e-mail
  if (!validarEmail(email)) {
      alert('Por favor, insira um e-mail válido.');
      event.preventDefault(); // Impede o envio do formulário
      return;
  }

  // Validar CPF
  if (!validarCPF(cpf)) {
      alert('CPF deve ter 11 caracteres.');
      event.preventDefault();
      return;
  }

  // Validar telefone (agora com 11 dígitos)
  if (!validarTelefone(fone)) {
      alert('Por favor, insira um telefone com 11 dígitos (sem parênteses e traços).');
      event.preventDefault();
      return;
  }

  // Limpar os campos do formulário após validação
  document.getElementById('cadastroForm').reset();

  // O formulário será enviado para a URL especificada no atributo "action"
  // Não precisamos adicionar mais nada aqui, pois o envio ocorre normalmente com o target="_blank"
});
