const nameInput = document.getElementById('name-field');
const emailInput = document.getElementById('email-field');
const mobileInput = document.getElementById('mobile-field');
const pwInput = document.getElementById('pw-field');
const pwConfirmInput = document.getElementById('pwconfirm-field');

const emailError = document.getElementById('email-error');
const mobileError = document.getElementById('mobile-error');
const pwError = document.getElementById('pw-error');
const pwConfirmError = document.getElementById('pwconfirm-error');

const continueButton = document.getElementById('continue-btn')

continueButton.addEventListener('click', function(event){
    event.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const mobile = mobileInput.value.trim();
    const pw = pwInput.value.trim();
    const pwConfirm = pwConfirmInput.value.trim();

    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.(com|net|org|in)$/;

    if (!emailPattern.test(email)){
        emailError.textContent = "Please enter a valid address";
        emailError.style.color = "red";
    }else{
        emailError.textContent = "Complete";
        emailError.style.color = "green";
    }

    const minLength = pw.length >= 8;
    const hasUpper = /[A-Z]/.test(pw);
    const hasLower = /[a-z]/.test(pw);
    const hasNumber = /[0-9]/.test(pw);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(pw);

    if (!minLength) {
        pwError.textContent = "Password must be at least 8 characters long.";
        pwError.style.color = "red";
    } else if (!hasUpper) {
        pwError.textContent = "Password must include at least one uppercase letter.";
        pwError.style.color = "red";
    } else if (!hasLower) {
        pwError.textContent = "Password must include at least one lowercase letter.";
        pwError.style.color = "red";
    } else if (!hasNumber) {
        pwError.textContent = "Password must include at least one number.";
        pwError.style.color = "red";
    } else if (!hasSpecial) {
        pwError.textContent = "Password must include at least one special character.";
        pwError.style.color = "red";
    } else {
        pwError.textContent = "Strong password!";
        pwError.style.color = "green";
    }

    if (pwConfirm === pw){
        pwConfirmError.textContent = "Password matches";
        pwConfirmError.style.color = "green";
        window.location.href = "../signin/signin.html";
    }else{
        pwConfirmError.textContent = "Password doesn't match";
        pwConfirmError.style.color = "red"
    }
});


