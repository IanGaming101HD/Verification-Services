const signupButton = document.getElementById('signin_btn')
const signin = document.getElementById('signin')
const tos = document.getElementById('tos')

tos.href = ''
signin.href = '../login/index.html'

signupButton.addEventListener('click', async (event) => {
    event.preventDefault();
    
    let email = document.getElementById('email').value
    let username = document.getElementById('username').value
    if (!username) {
        return
    }
    
    let password = document.getElementById('password').value
    if (password.length < 12 || password.length > 100) {
        return
    }

    let passwordConfirmation = document.getElementById('confirm_password').value
    if (passwordConfirmation !== password) {
        return
    }

    let checkbox = document.getElementById('checkbox')
    if (!checkbox.checked) {
        return
    }

    location.href = '../menu/index.html'
    await electron.changeWindowSize(1000, 600)
})

tos.addEventListener('click', async (e) => {
    window.open('https://google.com')
})

signin.addEventListener('click', async (e) => {
    await electron.changeWindowSize(425, 425)
})