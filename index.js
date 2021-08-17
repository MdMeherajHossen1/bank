document.getElementById('login-btn').addEventListener('click', function(){
    const email = document.getElementById('email');
    const emailValue = email.value;

    const password = document.getElementById('password');
    const passwordValue = password.value;
    if(emailValue == 'joy@gmail.com' && passwordValue == 'meheraj'){
        window.location.href = 'bank.html'
    }
})