

const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');
const alertMessage = document.querySelector('.alert');


for(let i = 0; i<btns.length; i++){
    btns[i].addEventListener('click', () => {
        let number = btns[i].getAttribute('data-num');
        screen.value += number;
    })
}

// au click 
    // si la l'ecran n'a aucune valeur 
            // on alert une erreur 
            // Sinon le contenu est executé 
equalBtn.addEventListener('click', () => {
    if(screen.value === ''){
        alertMessage.classList.remove('alert');
        alertMessage.classList.add('showAlert');
    } else {
        // la fonction eval permet d'avaluer le chaine de caractere passé en argument
        let value = eval(screen.value);
        screen.value = value;
    }
})
// au click sur le bouton C la valeur de l'écran est vide
clearBtn.addEventListener('click', () => {
    screen.value = '';
})