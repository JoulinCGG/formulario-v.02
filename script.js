const form = document.getElementById('form')
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordconfirmation = document.getElementById('password-confirmation')
const experiencia = document.getElementById('experiencia')

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const nomevalue = nome.value;
    const emailvalue = email.value;
    const passwordvalue = password.value;
    const passwordconfirmationvalue = passwordconfirmation.value;
    const experienciavalue = experiencia.value;

    if(nomevalue ===''){
        setErrorFor(nome, "O nome é obrigatório.");
    }else{
        setSuccessFor(nome);
    }
    if(emailvalue ===''){
        setErrorFor(email, "O email é obrigatório.");
    }else if(!checkEmail(emailvalue)){
        setErrorFor(email, "Por favor, insira um email válido.")
    }else{
        setSuccessFor(email);
    }

    if(passwordvalue ===''){
        setErrorFor(password, "A senha é obrigatória.")
    }else if(password.value.length < 7){
        setErrorFor(password, "A senha deve ter no mínimo 7 caracteres.")
    }else{
        setSuccessFor(password);
    }

    if(passwordconfirmationvalue === ''){
        setErrorFor(passwordconfirmation, "Confirme sua senha.");
    }else if (passwordconfirmationvalue !== passwordvalue){
        setErrorFor(passwordconfirmation, "As senhas não conferem");
    }else{
        setSuccessFor(passwordconfirmation)
    }
    
    const formControls = form.querySelectorAll('.form-control');
    const formIsValid= [ ... formControls].every((formControl) =>{
        return formControl.className === "form-control success";
    });
    if(formIsValid){
        console.log("O formulário está 100% válido!");
        window.alert("Cadastro realizado com sucesso, você sera direcionado para página de login.")
        setTimeout(function(){
            location.href="login.html"
        }, 2000);
    }
}
function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    //Adiciona a mensagem de erro
    small.innerText = message;

    //Adiciona a classe de erro
    formControl.className = "form-control error";
}
function setSuccessFor(input){
    const formControl = input.parentElement;

    //Adiciona a classe de sucesso
    formControl.className = "form-control success";
}
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}
