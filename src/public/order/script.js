const signinButton = document.getElementById('signin_btn')
const signup = document.getElementById('signup')

signup.href = '../signup/index.html'

signinButton.addEventListener('click', async (event) => {
    event.preventDefault()

    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    if ((await electron.logins).find((user) => user.username === username.toLowerCase() && user.password === password)) {
        location.href = '../menu/index.html'
        await electron.changeWindowSize(1000, 600)
    }
})

signup.addEventListener('click', async (e) => {
    await electron.changeWindowSize(450, 450)
})