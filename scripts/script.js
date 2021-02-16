const emailFormat = /\S+@\S+\.\S+/;
const formField = document.getElementById('form-field');
const emailError = document.getElementById('email-error');
const emailErrorSVG = document.getElementById('error-svg');
const email = document.getElementById('email');
const button = document.getElementById('btn');

function showError() {
    emailError.innerHTML = "Please provide a valid email";
    emailErrorSVG.style.display = 'initial';
    formField.style.border = '1px solid red';
}

function resetError() {
    emailError.innerHTML = "";
    emailErrorSVG.style.display = "none";
    formField.style.border = '1px solid hsl(0, 36%, 70%)';
}

function validate() {
    let emailValue = email.value;

    if (emailValue.match(emailFormat)) {
        return true;
    } else {
        showError();
    };

    window.setTimeout(resetError, 5000);
    };

button.addEventListener('click', validate);

