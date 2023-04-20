const start_session_button = document.getElementById('start_session_button')
const viewButtons = document.getElementsByClassName('view_button')

async function viewButtonEvent() {
    window.open('../crypto/index.html', '_blank', 'width=1000, height=600, autoHideMenuBar: true, resizable: false')
    // window.open('../crypto/index.html', '_blank', 'width=1000, height=600, autoHideMenuBar: true, resizable: false, webPreferences: { devTools: true }')
}

viewButtons[0].addEventListener('click', viewButtonEvent)
viewButtons[1].addEventListener('click', viewButtonEvent)
viewButtons[2].addEventListener('click', viewButtonEvent)
viewButtons[3].addEventListener('click', viewButtonEvent)
viewButtons[4].addEventListener('click', viewButtonEvent)
viewButtons[5].addEventListener('click', viewButtonEvent)
viewButtons[6].addEventListener('click', viewButtonEvent)
viewButtons[7].addEventListener('click', viewButtonEvent)
viewButtons[8].addEventListener('click', viewButtonEvent)