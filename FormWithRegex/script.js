// Função para buscar e-mails
function findEmails() {
  const text = document.getElementById('email-text').value;
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
  const emails = text.match(emailRegex);
  document.getElementById('email-result').innerHTML = emails ? emails.join(', ') : 'Nenhum e-mail encontrado.';
}

// Função para validar CPF
function validateCPF() {
  const cpf = document.getElementById('cpf').value;
  const cpfRegex = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;
  const result = cpfRegex.test(cpf) ? 'CPF válido' : 'CPF inválido';
  document.getElementById('cpf-result').innerHTML = result;
}

// Função para substituir datas no formato DD/MM/AAAA para AAAA-MM-DD
function replaceDates() {
  const text = document.getElementById('date-text').value;
  const dateRegex = /(\d{2})\/(\d{2})\/(\d{4})/g;
  const newText = text.replace(dateRegex, '$3-$2-$1');
  document.getElementById('date-result').innerHTML = newText;
}

// Função para validar senha complexa
function validatePassword() {
  const password = document.getElementById('password').value;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
  const result = passwordRegex.test(password) ? 'Senha válida' : 'Senha inválida';
  document.getElementById('password-result').innerHTML = result;
}
