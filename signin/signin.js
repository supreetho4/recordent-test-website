const form = document.getElementById('signin-form');
const emailInput = document.getElementById('user-field');
const errorMsg = document.getElementById('error');
const submitButton = document.getElementById('submit-btn')

submitButton.addEventListener("click", function(event){
    event.preventDefault();
    const email = emailInput.value.trim();

    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.(com|net|org|in)$/;

    if (!emailPattern.test(email)){
        errorMsg.textContent = "Please enter a valid address";
        errorMsg.style.color = "red";
    }else{
        window.location.href="enterpw.html";
    }
});