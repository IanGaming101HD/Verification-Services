const balance = document.getElementById('balance')

balance.innerText = `${(await electron.getBalance() ? await electron.getBalance() : 0).toFixed(2)} €`

const services = await electron.services

services.forEach(async function (service) {
    let options = document.getElementById('service')

    let option = document.createElement('option')
    options.appendChild(option)

    if (service.name.split(' ')[0].toLowerCase() === 'twitter') {
        option.value = `${service.name.split(' ')[0].toLowerCase()}_${service.name.split(' ')[1].toLowerCase()}`
    } else {
        option.value = service.name.split(' ')[0].toLowerCase()
    }
    option.innerText = service.name
})

const serviceOptions = document.getElementById('service')
const submitButton = document.getElementById('submit_btn')
const closeButton = document.getElementById('close_button')

function setService(index) {
    let description = document.getElementById('description')
    let quantity = document.getElementById('quantity')

    description.disabled = false
    description.value = services[index].description
    description.disabled = true

    quantity.value = ''
}
setService(0)

serviceOptions.addEventListener('change', function () {
    let index = serviceOptions.selectedIndex;
    setService(index)
})

submitButton.addEventListener('click', async (event) => {
    event.preventDefault()

    let link = document.getElementById('link')
    let quantity = document.getElementById('quantity')
    let popupContainer = document.getElementsByClassName('popup_container')[0]

    if (link.value && quantity.value) {
        let msg = document.getElementById('msg')
        let regex = /^(http|https):\/\/[a-z0-9\-]+\.[a-z]{2,}[^\s]*$/i;

        if (regex.test(link.value)) {
            msg.innerText = 'Enter a valid link'
        } else if (isNaN(quantity.value) || quantity.value.includes('.') || parseInt(quantity.value) <= 0) {
            msg.innerText = 'Enter a valid amount for quantity'
        } else {
            msg.innerText = 'Not enough funds on balance'
        }
    } else {
        msg.innerText = 'Please fill in all required fields'
    }
    popupContainer.hidden = false
})

closeButton.addEventListener('click', function () {
    let popupContainer = document.getElementsByClassName('popup_container')[0]
    popupContainer.hidden = true;
})

let quantity = document.getElementById('quantity')

quantity.addEventListener('input', (event) => {
    if (isNaN(quantity.value) || !Number.isInteger(parseInt(quantity.value)) || parseInt(quantity.value) <= 0) return
    
    let charge = document.getElementById('charge')
    let index = serviceOptions.selectedIndex;
    
    charge.disabled = false
    charge.value = `${(services[index].price * parseInt(quantity.value)).toFixed(2)} €`
    charge.disabled = true
})

export { setService }