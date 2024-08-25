
//cor do menu mudar quando rolar p baixo//
let navBar = document.querySelector('#header');

document.addEventListener('scroll', ()=>{
    let scrollTop = window.scrollY;
    if(scrollTop > 0){
        navBar.classList.add('rolar');
    }else{
        navBar.classList.remove('rolar');
    }

} )

// botao voltar ao topo apenas aparecer quando rolar p baixo//
window.onscroll = function() {
    var topButton = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

// formulario de contato//


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
</script>

<form id="meuFormulario">
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome" required>
  <span id="mensagemNome" class="mensagem-erro

"></span>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  <span id="mensagemEmail" class="mensagem-erro"></span>

  <button type="submit">Enviar</button>
