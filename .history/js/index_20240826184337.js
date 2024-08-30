
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

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const fields = form.querySelectorAll("[required]"); // Seleciona todos os campos obrigatórios//
    const contactPreference = document.getElementById("contact-preference");
    const nomeField = document.getElementById("nome");

    // Função para validar cada campo individualmente//
    function validateField(field) {
        const error = field.nextElementSibling;

        // Limpar mensagem de erro anterior//
        if (error && error.classList.contains("error-message")) {
            error.remove();
        }

        // Verificar se o campo está vazio//
        if (field.validity.valueMissing) {
            showError(field, "Por favor, preencha este campo.");
            return false;
        }

        // Verificar se o nome tem menos de 3 letras//
        if (field === nomeField && field.value.length < 3) {
            showError(field, "O nome deve ter mais de 3 letras.");
            return false;
        }

        // Verificar e-mail válido//
        if (field.type === "email" && field.validity.typeMismatch) {
            showError(field, "Por favor, insira um e-mail válido.");
            return false;
        }

        // Verificar telefone válido//
        if (field.type === "tel" && !/^\d{10,11}$/.test(field.value)) {
            showError(field, "Por favor, insira um número de telefone válido com 10 ou 11 dígitos.");
            return false;
        }

        // Verificar se a opção de contato foi selecionada
        if (field === contactPreference && field.value === "") {
            showError(field, "Por favor, selecione uma forma de contato.");
            return false;
        }

        return true;
    }

    // Função para exibir mensagem de erro
    function showError(field, message) {
        const error = document.createElement("span");
        error.classList.add("error-message");
        error.style.color = "red";
        error.textContent = message;
        field.after(error);
    }

    // Função para validar todos os campos no formulário
    function validateForm(event) {
        let valid = true;

        fields.forEach(function(field) {
            if (!validateField(field)) {
                valid = false;
            }
        });

        if (!valid) {
            event.preventDefault(); // Impede o envio do formulário se houver erros
        }
    }

    // Adicionar ouvintes de eventos
    fields.forEach(function(field) {
        field.addEventListener("blur", function() {
            validateField(field);
        });
    });

    form.addEventListener("submit", validateForm);
});
