const pwInput = document.getElementById('pw-field');
const pwError = document.getElementById('pw-error');
const submitButton = document.getElementById('submit-btn');

submitButton.addEventListener('click', function(event){
    event.preventDefault();
    const pw = pwInput.value.trim();

    if (pw.length < 6){
        pwError.textContent = "Password must be at least 6 characters";
        pwError.style.color = "red";
    }else{
        window.location.href = "../dashboard/dashboard.html";
    }
});