
const input = document.querySelector('.input');

const inputPassword = document.querySelector('#password');

input.addEventListener('focus', () => {
    input.classList.add('focus');
});

inputPassword.addEventListener('blur', () => {
    if(inputPassword == "");
        inputPassword.classList.remove('focus');
    
});