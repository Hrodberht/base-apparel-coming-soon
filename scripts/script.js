function validate() {
    let emailValue = document.getElementById('email').value;
    let formField = document.getElementById('form-field');
    let emailFormat = /\S+@\S+\.\S+/;
    let emailError = document.getElementById('email-error');
    let emailErrorSVG = document.getElementById('error-svg');

    if (emailValue.match(emailFormat)) {
        return true;
    } else {
        emailError.innerHTML = "Please provide a valid email";
        // formField.classList.add('form-field');
        emailErrorSVG.style.display = 'initial';
        formField.style.border = '1px solid red';
    }

    setTimeout(function() {
		emailError.innerHTML = "";
        emailErrorSVG.style.display = "none";
        formField.style.border = '1px solid hsl(0, 36%, 70%)'
	}, 5000)
};
