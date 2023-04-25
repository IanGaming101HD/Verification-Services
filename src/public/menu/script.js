const viewButtons = document.getElementsByClassName('view_button')
const closeButton = document.getElementById('close_button')
const orderButton = document.getElementById('order_btn')

Array.from(viewButtons).forEach(function (viewButton) {
    viewButton.addEventListener('click', function () {
        viewButtonEvent(viewButton);
    })
})

async function viewButtonEvent(button) {
    let popupContainer = document.getElementById('popup_container')
    let popupName = document.getElementById('popup_name')
    let popupDescription = document.getElementById('popup_description')

    popupContainer.hidden = false
    popupName.innerText = button.parentNode.getElementsByClassName('name')[0].innerText
    popupDescription.innerHTML = button.parentNode.getElementsByClassName('description')[0].innerHTML

    // window.open('../profile/index.html', '_blank', 'width=500, height=400, autoHideMenuBar=true, resizable=false, webPreferences={ devTools: false }')
}

closeButton.addEventListener('click', function () {
    let popupContainer = document.getElementById('popup_container')
    popupContainer.hidden = true;
})

orderButton.addEventListener('click', async function () {
    location.href = '../order/index.html'
    await electron.changeWindowSize(1000, 850)
})