//VARIABLES
const nombreInput = document.getElementById("nombre");
const apellidoInput = document.getElementById("apellido");
const emailInput = document.getElementById("email");
const password1Input = document.getElementById("password1");
const password2Input = document.getElementById("password2");
const terminos = document.getElementById("terminos");
const form =  document.getElementById("regBtn");

//ALERTA DE FORMULARIO EXITOSO
function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
    //TEMPORIZADOR PARA REMOVER ALERTA
    setTimeout(() => {
    document.getElementById("alert-success").classList.remove("show");    
    }, 2000);
}

//ALERTA DE ERRORES
function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
    //TEMPORIZADOR PARA REMOVER ALERTA
    setTimeout(() => {
    document.getElementById("alert-danger").classList.remove("show");    
    }, 2000);
    
}

//VALIDACIÓN DE FORMULARIO
form.addEventListener("click", ()=> {
    if ((nombreInput.value.length) === 0 || 
        (apellidoInput.value.length) === 0 ||
        (emailInput.value.length) === 0 ||
        (password1Input.value.length) < 6 ||
        (password2Input.value !== password1Input.value) || 
        (!terminos.checked)
    ) {
        showAlertError()
    } else {
        showAlertSuccess()
    }
});