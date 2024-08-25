
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

const fields = document.querySelectorAll("[required]")

function ValidateField(field) {
    // logica para verificar se existem erros
    function verifyErrors() {
        let foundError = false;

        for(let error in field.validity) {
            // se não for customError
            // então verifica se tem erro
            if (field.validity[error] && !field.validity.valid ) {
                foundError = error
            }
        }
        return foundError;
    }

    function customMessage(typeError) {
        const messages = {
            text: {
                valueMissing: "Por favor, preencha este campo"
            },
            email: {
                valueMissing: "Email é obrigatório",
                typeMismatch: "Por favor, preencha um email válido"
            }
            tel: {  
                typeMismatch: "Por favor, preencha um número de telefone válido"
            },
        
        }

        return messages[field.type][typeError]
    }

    function setCustomMessage(message) {
        const spanError = field.parentNode.querySelector("span.error")
        
        if (message) {
            spanError.classList.add("active")
            spanError.innerHTML = message
        } else {
            spanError.classList.remove("active")
            spanError.innerHTML = ""
        }
    }

    return function() {

        const error = verifyErrors()

        if(error) {
            const message = customMessage(error)

            field.style.borderColor = "red"
            setCustomMessage(message)
        } else {
            field.style.borderColor = "green"
            setCustomMessage()
        }
    }
}


function customValidation(event) {

    const field = event.target
    const validation = ValidateField(field)

    validation()

}

for( field of fields ){
    field.addEventListener("invalid", event => { 
        // eliminar o bubble
        event.preventDefault()

        customValidation(event)
    })
    field.addEventListener("blur", customValidation)
}


document.querySelector("form")
.addEventListener("submit", event => {
    console.log("enviar o formulário")

    // não vai enviar o formulário
    event.preventDefault()
})