let usernameMessage = document.querySelector('.js-username-validation')
let passwordMessage = document.querySelector('.js-password-validation')

let usernameInput = document.querySelector('.js-username')
let passwordInput = document.querySelector('.js-password')


function usernameValidation () {
    if (usernameInput.value.length < 12){
        usernameMessage.style.color = 'red'
        usernameMessage.innerHTML = 'Must Contain 12 Charactor (Min)'
        usernameMessage.style.display = 'block'
    }else{
        usernameMessage.style.color = 'green'
        usernameMessage.innerHTML = 'Correct username Value'
    }
}

function passwordValidation () {
    if (passwordInput.value.length < 8){
        passwordMessage.style.color = 'red'
        passwordMessage.innerHTML = 'Must Contain 8 Charactor (Min)'
        passwordMessage.style.display = 'block'
    }else{
        passwordMessage.style.color = 'green'
        passwordMessage.innerHTML = 'Correct password Value'
    }  
}
