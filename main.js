const btn = document.querySelector('.button')
const btnn = document.querySelector('.buttonn')
const main = document.querySelector('.main')
const end = document.querySelector('.succes-message')
const form1 = document.querySelector('.form1')
const text1 = document.querySelector('#email')
const validEmail = document.querySelector('.valid-email')


function checkEmail() {

    var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
        validEmail.classList.remove('hidden')
        email.style.borderColor = 'tomato'
        email.style.color = 'tomato'
        email.style.background = 'hsl(4, 100%, 91%)'
    } else {
        end.classList.remove('hidden')
        main.classList.add('hidden')
    }
}

const dismiss = () => {
    end.classList.add('hidden')
    main.classList.remove('hidden')
    text1.value = ''
}

btn.addEventListener('click', checkEmail)
btnn.addEventListener('click', dismiss)

