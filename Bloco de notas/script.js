const textarea = document.getElementById('note');
const status = document.getElementById('status');

// Carrega nota salva ao abrir a página
window.onload = () => {
  const notaSalva = localStorage.getItem('blocoDeNotas');
  if (notaSalva) {
    textarea.value = notaSalva;
    status.textContent = "Nota carregada com sucesso!";
  }
};

function salvarNota() {
  localStorage.setItem('blocoDeNotas', textarea.value);
  status.textContent = "💾 Nota salva!";
}

function limparNota() {
  textarea.value = '';
  localStorage.removeItem('blocoDeNotas');
  status.textContent = "🗑️ Nota apagada!";
}
