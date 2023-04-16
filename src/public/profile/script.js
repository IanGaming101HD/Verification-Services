const submitButton = document.getElementById('submit_btn')
const redText = document.getElementById('red_text')

submitButton.addEventListener('click', async (e) => {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    if ((await electron.logins).find((user) => user.username === username.toLowerCase() && user.password === password)) {
        window.close()
        // let win = await electron.newWindow(1000, 600)
        // win.loadFile('../menu/index.js')
        
        const win = await electron.newWindow(1000, 600)
        const newWin = window.require('electron').remote.BrowserWindow.fromId(win.id)
        newWin.loadFile('../menu/index.js')
    } else {
        redText.hidden = false
    }
})