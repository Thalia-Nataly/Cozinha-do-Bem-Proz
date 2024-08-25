document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('meuFormulario');

    formulario.addEventListener('submit', function(event) {
      event.preventDefault();

      const nomeInput = document.getElementById('nome');
      const nomeValor = nomeInput.value.trim();
      const nomeMensagem = document.getElementById('mensagemNome');

      if (nomeValor.length < 3) {
        nomeMensagem.textContent = 'O nome deve ter pelo menos 3 caracteres.';
        return;
      } else {
        nomeMensagem.textContent = '';
      }

      const emailInput = document.getElementById('email');
      const emailValor = emailInput.value.trim();
      const emailMensagem = document.getElementById('mensagemEmail');

      if (!isValidEmail(emailValor)) {
        emailMensagem.textContent = 'Por favor, insira um email válido.';
        return;
      } else {
        emailMensagem.textContent = '';
      }

      alert('Formulário enviado com sucesso!');
      formulario.reset();
    });

    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });


