const submitButton = document.getElementById('submit_btn')
const redText = document.getElementById('red_text')

submitButton.addEventListener('click', async (e) => {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    if ((await electron.logins).find((user) => user.username === username.toLowerCase() && user.password === password)) {
        location.href = '../menu/index.html'
        await electron.changeWindowSize(1000, 600)
    } else {
        redText.hidden = false
    }
})