let payButton = document.getElementById('pay_button')

payButton.addEventListener('click', (event) => {
    let method = document.getElementById('method')
    if (method.selectedIndex === 0) {
        window.open('https://www.coinbase.com')
    } else if (method.selectedIndex === 1) {
        window.open('https://www.paypal.com')
    }
})