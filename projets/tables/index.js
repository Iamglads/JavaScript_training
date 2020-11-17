const inputNumber = document.querySelector('.inputNumber')
const calcul = document.querySelector('#select')
const btn = document.querySelector('.btn')
const displayResult = document.querySelector('.displayResult')



btn.addEventListener('click', (event) => {
    event.preventDefault()
    calculer()
})



function calculer() {
    
    let inputValue = inputNumber.value
    let calculValue = calcul.value

    if(inputValue === "") {
        displayResult.innerHTML = "Vous devez rentrez un nombre!"
        displayResult.style.color = 'red'
    }

    if(calculValue === '*') {
        for(let i = 1; i <= 10; i++) {
            let result = inputValue * i
             displayResult.innerHTML += `<p>${inputValue} * ${i} = ${result}</p>`
         } 
    }
    else if(calculValue === '+') {
        for(let i = 0; i <= 10; i++) {
            let result = inputValue + i
            displayResult.innerHTML += `<p>${inputValue} + ${i} = ${result}</p>`
         } 
    }
    
}

console.log('OK')