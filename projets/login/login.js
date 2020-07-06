
const input = document.querySelector('.input-login');
const inputPassword = document.querySelector('#password');
const email = document.querySelector('#email')
const login = document.querySelector('.logbtn');
const feedback = document.querySelector('.feedback');

input.addEventListener('focus', () => {
    input.classList.add('focus');
});

inputPassword.addEventListener('blur', () => {
    if (inputPassword === "") {
        inputPassword.classList.add('focus');
    }

});


email.addEventListener('onkeyup', event => {
    event.preventDefault();
    let regex = /^[a-z0-9.-_]+@[a-z0-9._-]+\.[a-z]{2,6}$/;

    if (!regex.test(login.value)) {
        email.getElementsByClassName.backgroundColor = "red";
    } else {
        email.getElementsByClassName.backgroundColor = "green";
    }
})

inputPassword.addEventListener('blur', () => {
    let carDecial = /\d/
    let caracSpeciaux = /[$&@!]/
    let error = "";

    if (inputPassword.value.lenght < 6) {
        error = " <p> Trop court </p>";

    } else if (inputPassword.value.lenght > 8) {
        error = " <p> Trop long </p>";
    }

    if(!inputPassword.value.match(carDecial)){
        error = " <p> Doit contenir un chiffre </p>";
    } 
    if(!inputPassword.value.match(caracSpeciaux)){
        error = " <p> Doit contenir un caratctère speciale : $, &, @ ou ! </p>";
    }
    if (error){
        feedback.innerHTML =  error ;
    } else {
        feedback.innerHTML = `Le mot de passe est valide`;
        feedback.style.color = "green";
    }
})