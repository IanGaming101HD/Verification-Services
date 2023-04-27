const signinButton = document.getElementById('signin_btn')
const signup = document.getElementById('signup')

signup.href = '../signup/index.html'

signinButton.addEventListener('click', async (event) => {
    event.preventDefault()

    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    if (await electron.findLogin(username.toLowerCase(), password)) {
        let session = await electron.session
        session.username = username.toLowerCase()
        session.password = password
        await electron.writeFileSync('./src/session.json', JSON.stringify(session))

        location.href = '../menu/index.html'
        await electron.changeWindowSize(1250, 725)
        await electron.centreWindow()
    }
})

signup.addEventListener('click', async (e) => {
    await electron.changeWindowSize(450, 450)
    await electron.centreWindow()
})