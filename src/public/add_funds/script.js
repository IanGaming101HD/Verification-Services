const balance = document.getElementById('balance')

balance.innerText = `${(await electron.getBalance() ? await electron.getBalance() : 0).toFixed(2)} €`

let payButton = document.getElementById('pay_button')

payButton.addEventListener('click', async (event) => {
    let method = document.getElementById('method')
    if (method.selectedIndex === 0) {
        // window.open('https://www.coinbase.com')
        await electron.openInBrowser('https://www.coinbase.com')
    } else if (method.selectedIndex === 1) {
        // window.open('https://www.paypal.com')
        await electron.openInBrowser('https://www.paypal.com')
    }
})