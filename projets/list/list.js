const addItemsAction = document.querySelector('.addItems-action');
const input = document.querySelector('.addItems-input');
const submit = document.querySelector('.addItems-submit');
const list = document.querySelector('.grocery-list');
const displayItemsAction = document.querySelector('.displayItems-action');
const clear = document.querySelector('.displayItems-clear');



submit.addEventListener('click', ajouterElement);
list.addEventListener('click', retirerElement);
clear.addEventListener('click', supprimerElement);

document.addEventListener('DOMContentLoaded', displayStorage);


function ajouterElement(event){
    event.preventDefault();
    let  inputValue = input.node;
    if(inputValue !== "" ){
      showAction(addItemsAction, `${inputValue} ajouer à la liste`, true);
      createItem(inputValue);
      updateStorage(inputValue)
    }
}

function showAction(element, text, inputValue){
    // si le champ est rempli on alert succès et on appele la fonctionqui ajouter un element
    if (inputValue === true){
        element.classList.add('succes');
        element.innerHtml = text;
        input.value = '';
        setTimeout(function () {
            element.classList.remove('succes')
        }, 3000)
    }
    // Sinon on alert 
    else {
        element.classList.add('alert');
        element.innerHtml = text;
        input.value = '';
        setTimeout(function () {
            element.classList.remove('alert')
        }, 3000)
        
    }
}

function createItem(inputValue){
    let parent = document.createElement('div');
    parent.classList.add('grocery-item');

    parent.innerHtml = `<h4 class="grocery-item__title">${value}</h4>
    <a href="#" class="grocery-item__link">
     <i class="far fa-trash-alt"></i>
    </a>`;

    list.appendChild(parent);
}

function updateStorage(){
    
}

function retirerElement(){

}

function supprimerElement(){

}