// variables 
const input = document.querySelector('.input-task');
const submit = document.querySelector('.submit');
const list = document.querySelector('.list');
const clear = document.querySelector('.clear');
//const deleteIcon = document.querySelector('')
const feedback = document.querySelector('.feedback')
// déclarez une variable qui stoke un tableau vide 
const listArray = []



submit.addEventListener('click', addTask);
//list.addEventListener('click', retirerElement);



function addTask(event) {
    event.preventDefault();
    let inputValue = input.value;
    const id = new Date().getTime().toString()

    if (inputValue == "") {
        feedback.innerHTML = " Le champs est vide"
        feedback.classList.add("alert")
    } else {
        const element = document.createElement("article")
        let attribut = document.createAttribute("data-id")
        attribut.value = id
        element.setAttributeNode(attribut)
        element.classList.add('list-item')
        element.innerHTML = `<p class="title">${inputValue}</p>
            <di class"btn-actions">
                <!-- Modifier la tâche -->
                <i class="fas fa-edit"></i>
                <!-- supprimer la tâche -->
                <i class="fas fa-trash"></i>
            </di>`
        
        // Ajouter les évenement pour les deux bouttons d'actions
        const deleteBtn = element.querySelector(".fa-trash")
        deleteBtn.addEventListener('click', deleteTask)

        const editBtn = element.querySelector(".fa-edit")
        editBtn.addEventListener('click', editTask)

        list.appendChild(element)

        addInStorage(id, inputValue)
    }
} 

function addInStorage (id, inputValue) {
   const task = { id, inputValue}
   let items = getStorage()
   items.push(task)
   localStorage.setItem("listArray", JSON.stringify(items))
}


function getStorage () {
    return localStorage.getItem('listArray')
    ? JSON.parse(localStorage.getItem('listArray'))
    : []
}

function displayList () {
    if(listArray.length >= 0) {
        console.log('Inférieur à zéro')
    } else {
        console.log(listArray.length)
    }
}


function deleteAllTask() {
    localStorage.removeItem('listArray')
    location.reload()
}


function deleteTask(e) {
    e.preventDefault()
    console.log('Suprimé')
}



function editTask(e) {
    e.preventDefault()
    console.log('Modifié')
}



