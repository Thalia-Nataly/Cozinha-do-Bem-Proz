
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
    const fields = form.querySelectorAll("[required]");
    const contactPreference = document.getElementById("contact-preference");
    const nomeField = document.getElementById("nome");

    // Função para validar cada campo individualmente
    function validateField(field) {
        const error = field.nextElementSibling;

        // Limpar mensagem de erro anterior
        if (error && error.classList.contains("error-message")) {
            error.remove();
        }

        // Verificar se o campo está vazio
        if (field.validity.valueMissing) {
            showError(field, "Por favor, preencha este campo.");
            return false;
        }

        // Verificar se o nome tem menos de 3 letras
        if (field === nomeField && field.value.length < 3) {
            showError(field, "O nome deve ter mais de 3 letras.");
            return false;
        }

        // Verificar e-mail válido
        if (field.type === "email" && field.validity.typeMismatch) {
            showError(field, "Por favor, insira um e-mail válido.");
            return false;
        }

        // Verificar telefone válido
        if (field.type === "tel" && !/^\d{10,11}$/.test(field.value)) {
            showError(field, "Por favor, insira um número válido com até 11 dígitos.");
            return false;
        }

        // Verificar se a opção de contato foi selecionada
        if (field === contactPreference && field.validity.valueMissing) {
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
// Fim formulario de contato//


// Botões politica de cookies //
document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const cookieAcceptButton = document.getElementById('cookie-accept');

    // Verifica se a barra de cookies já foi exibida na sessão atual
    if (!sessionStorage.getItem('cookiesSeen')) {
        cookieBanner.style.display = 'block'; // Exibe a barra de cookies
    }

    // Função para aceitar cookies
    cookieAcceptButton.addEventListener('click', function() {
        cookieBanner.style.display = 'none';
        sessionStorage.setItem('cookiesSeen', 'true'); // Marca como visto
    });
});

// Fim Botões politica de cookies //

// PRODUTOS //
// Botões Frutas, Vegetais e Verduras para aparecer e desaparecer quando selecionar ourta opção//
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-option');
    const tableBody = document.querySelector('#items-table tbody');
    const showFormBtn = document.querySelector('#show-form-btn');
    const formContainer = document.querySelector('.form-container-wrapper');

    // Preços dos produtos
    const prices = {
        "Açaí": 15.00,
        "Cacau": 20.00,
        "Goji Berry": 25.00,
        "Kiwi": 18.00,
        "Manga": 12.00,
        "Mirtilo (Blueberry)": 30.00,
        "Romã": 22.00,
        "Morango": 10.00,
        "Uva": 14.00,
        "Couve": 8.00,
        "Ervilha": 9.00,
        "Feijão": 11.00,
        "Grão-de-bico": 13.00,
        "Lentilha": 12.00,
        "Nabo": 7.00,
        "Rúcula": 9.00,
        "Salsa": 6.00,
        "Espinafre": 10.00,
        "Abobrinha": 8.00,
        "Batata-doce": 7.00,
        "Beterraba": 8.00,
        "Brócolis": 10.00,
        "Cenoura": 5.00,
        "Pepino": 6.00,
        "Pimentão": 9.00,
        "Repolho": 7.00,
        "Tomate": 7.00
    };

    // Função para formatar valor em reais
    const formatCurrency = (value) => {
        return `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    };

    // Função para atualizar a tabela
    const updateTable = () => {
        tableBody.innerHTML = ''; // Limpa a tabela

        document.querySelectorAll('.item-box').forEach(itemBox => {
            const name = itemBox.querySelector('h2').textContent;
            const quantity = parseInt(itemBox.querySelector('.quantity').value) || 0;

            if (quantity > 0) {
                const price = prices[name] || 0;
                const totalValue = price * quantity;
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${name}</td>
                    <td>${quantity}</td>
                    <td>${formatCurrency(totalValue)}</td>
                `;
                tableBody.appendChild(row);
            }
        });
    };

    // Função para atualizar a quantidade
    const updateQuantity = (element, delta) => {
        const input = element.parentElement.querySelector('input');
        let currentValue = parseInt(input.value);
        currentValue = Math.max(0, currentValue + delta); // Garante que o valor não seja negativo
        input.value = currentValue;
        updateTable(); // Atualiza a tabela após alterar a quantidade
    };

    // Adicionar funcionalidade para os botões de incremento e decremento
    document.querySelectorAll('.quantity-controls button').forEach(button => {
        button.addEventListener('click', () => {
            const isIncrement = button.classList.contains('increment');
            updateQuantity(button, isIncrement ? 1 : -1);
        });
    });

    // Adicionar funcionalidade para os botões de filtro de categoria
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const categoryId = button.getAttribute('data-category');
            const category = document.getElementById(categoryId);
            
            // Alternar visibilidade da categoria clicada
            if (category.classList.contains('active')) {
                category.classList.remove('active');
            } else {
                // Ocultar todas as categorias
                document.querySelectorAll('.category').forEach(cat => {
                    cat.classList.remove('active');
                });
                // Mostrar a categoria clicada
                category.classList.add('active');
            }
        });
    });

    // Inicializa a tabela quando a página carrega
    updateTable();

    // Adicionar funcionalidade para mostrar/ocultar o formulário
    showFormBtn.addEventListener('click', () => {
        if (formContainer.style.display === 'block') {
            formContainer.style.display = 'none';
        } else {
            formContainer.style.display = 'block';
        }
    });
});


// Fim PRODUTOS //