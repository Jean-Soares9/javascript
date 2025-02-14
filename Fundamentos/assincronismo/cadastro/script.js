// Função para validar o e-mail
function validarEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

// Função para validar CPF com algoritmo correto
function TestaCPF(strCPF) {
  var Soma = 0;
  var Resto;
  if (strCPF === "00000000000") return false;

  // Validação do primeiro dígito verificador
  for (let i = 1; i <= 9; i++) {
    Soma += parseInt(strCPF.charAt(i - 1)) * (11 - i);
  }
  Resto = (Soma * 10) % 11;
  if ((Resto === 10) || (Resto === 11)) Resto = 0;
  if (Resto !== parseInt(strCPF.charAt(9))) return false;

  Soma = 0;
  // Validação do segundo dígito verificador
  for (let i = 1; i <= 10; i++) {
    Soma += parseInt(strCPF.charAt(i - 1)) * (12 - i);
  }
  Resto = (Soma * 10) % 11;
  if ((Resto === 10) || (Resto === 11)) Resto = 0;
  if (Resto !== parseInt(strCPF.charAt(10))) return false;

  return true;
}

// Aplica a formatação no campo de CPF enquanto o usuário digita
document.getElementById('cpf').addEventListener('input', function() {
  const cpf = this.value.replace(/\D/g, ''); // Remove a formatação
  const mensagemCPF = document.getElementById('mensagemCPF');
  
  // Verificar se o CPF está no formato correto e se é válido
  if (cpf.length === 11) {
    if (TestaCPF(cpf)) {
      mensagemCPF.textContent = 'CPF válido';
      mensagemCPF.style.color = 'green';
      mensagemCPF.style.display = 'inline';
    } else {
      mensagemCPF.textContent = 'CPF inválido';
      mensagemCPF.style.color = 'red';
      mensagemCPF.style.display = 'inline';
    }
  } else {
    // Esconde a mensagem quando o CPF não tem 11 dígitos
    mensagemCPF.style.display = 'none';
  }
});

// Função para formatar o telefone no formato (XX) XXXXX-XXXX
function formatarTelefone(telefone) {
  telefone = telefone.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

  // Formatar para (XX) XXXXX-XXXX
  if (telefone.length <= 2) {
    return `(${telefone}`;
  } else if (telefone.length <= 7) {
    return `(${telefone.slice(0, 2)}) ${telefone.slice(2)}`;
  } else {
    return `(${telefone.slice(0, 2)}) ${telefone.slice(2, 7)}-${telefone.slice(7, 11)}`;
  }
}

// Aplica a formatação no campo de telefone enquanto o usuário digita
document.getElementById('fone').addEventListener('input', function() {
  this.value = formatarTelefone(this.value);
});

// Função para formatar o CEP no formato XXXXX-XXX
function formatarCEP(cep) {
  cep = cep.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

  // Formatar para XXXXX-XXX
  if (cep.length <= 5) {
    return cep;
  } else {
    return `${cep.slice(0, 5)}-${cep.slice(5, 8)}`;
  }
}

// Aplica a formatação no campo de CEP enquanto o usuário digita
document.getElementById('cep').addEventListener('input', function() {
  this.value = formatarCEP(this.value);
});

// Função para buscar CEP e preencher o campo UF
async function buscarCep() {
  const cep = document.getElementById('cep').value;
  if (cep.length === 9) {
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
  const telefone = document.getElementById('fone').value;
  const email = document.getElementById('email').value;
  const cpf = document.getElementById('cpf').value;
  const cep = document.getElementById('cep').value;
  const numero = document.getElementById('numero').value;

  // Validar nome
  if (!nome.trim()) {
    alert('Por favor, insira seu nome completo.');
    event.preventDefault();
    return;
  }

  // Validar telefone
  const telefoneFormatado = telefone.replace(/\D/g, '');
  if (telefoneFormatado.length !== 11) {
    alert('Por favor, insira um telefone válido com 11 dígitos.');
    event.preventDefault();
    return;
  }

  // Validar e-mail
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regexEmail.test(email)) {
    alert('Por favor, insira um e-mail válido.');
    event.preventDefault();
    return;
  }

  // Validar CPF
  const cpfFormatado = cpf.replace(/\D/g, '');
  if (cpfFormatado.length !== 11 || !TestaCPF(cpfFormatado)) {
    alert('CPF inválido. Por favor, insira um CPF válido.');
    event.preventDefault();
    return;
  }

  // Validar CEP
  const cepFormatado = cep.replace(/\D/g, '');
  if (cepFormatado.length !== 8) {
    alert('CEP deve ter 8 dígitos.');
    event.preventDefault();
    return;
  }

  // Validar número de endereço
  if (!numero.trim()) {
    alert('Por favor, insira o número do endereço.');
    event.preventDefault();
    return;
  }

  // Exibir a mensagem de sucesso após a validação bem-sucedida
  const mensagemSucesso = document.getElementById('mensagemSucesso');
  mensagemSucesso.style.display = 'block'; // Mostra a mensagem de sucesso

  // Definir um temporizador para esconder a mensagem de sucesso após 5 segundos
  setTimeout(function() {
    mensagemSucesso.style.display = 'none'; // Esconde a mensagem após 5 segundos
    document.getElementById('cadastroForm').reset(); // Limpa o formulário após esconder a mensagem
  }, 5000); // 5 segundos

  // Impede o envio real do formulário para manter a exibição da mensagem de sucesso
  event.preventDefault();
});
