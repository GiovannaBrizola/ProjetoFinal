const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const senhaInput = document.querySelector("#senha");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //verifica se o nome está vazio
    if (nameInput.value === "") {
        alert("Preencha o seu nome");
        return;
    }

    //verifica se o email está vazio e se é válido
    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha o email");
        return;
    }

    //verifica se a senha está preenchida
    if (!validateSenha(senhaInput.value,6)) {
        alert("Preencha a senha com mínino 6 dígitos");
        return;
    }


    //se todos os campos estiverem corretamente, envie o form
    form.submit();
});

function isEmailValid(email) {


    //cria um regex para validar um email padrão
        const emailRegex = new RegExp(
        //usuario12@host.com.br
        /^[a-zA-z0._-]+@[a-zA-z0._-]+\.[a-z-Z]{2,}$/
    );
    if (emailRegex.test(email)) {
        return true
    }
    return false;
}


//função que valida a senha
function validateSenha(senha, minDigits) {
    if (senha.length >= minDigits) {
        //senha válida 
        return true
    }
    //senha inválida
    return false

}
















/* const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;//estrutura para o email

function setError(index) {
    campos[index].style.border = '2px solid #e63636'
    spans[index].style.display = 'block';
}

function removeError(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function nameValidate() {
    if (campos[0].value.lengh < 3) {
        setError(0);
    }
    else {
        removeError(0);
    }
}

function emailValidate() {
    if (!emailRegex.test(campos[1].value)) {
        setError(1);
    }
    else {
        removeError(1);
    }
} */