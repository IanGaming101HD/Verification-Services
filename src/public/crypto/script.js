const usdtButton = document.getElementById('usdt_button')
const ethButton = document.getElementById('eth_button')
const btcButton = document.getElementById('btc_button')
const solButton = document.getElementById('sol_button')

usdtButton.addEventListener('click', async (e) => {
    let menuContainer = document.getElementById('menu_container')
    let optionContainer = document.getElementById('option_container')

    menuContainer.hidden = true
    optionContainer.hidden = false

    document.body.innerHTML = document.body.innerHTML.replace('$currency', usdtButton.innerText);
    document.body.innerHTML = document.body.innerHTML.replace('$wallet', '0x43f039b254072E6Beb1A660B024241aA8ADcA1d9');
})

ethButton.addEventListener('click', async (e) => {
    let menuContainer = document.getElementById('menu_container')
    let optionContainer = document.getElementById('option_container')

    menuContainer.hidden = true
    optionContainer.hidden = false

    document.body.innerHTML = document.body.innerHTML.replace('$currency', usdtButton.innerText);
    document.body.innerHTML = document.body.innerHTML.replace('$wallet', '0x43f039b254072E6Beb1A660B024241aA8ADcA1d9');
})

btcButton.addEventListener('click', async (e) => {
    let menuContainer = document.getElementById('menu_container')
    let optionContainer = document.getElementById('option_container')

    menuContainer.hidden = true
    optionContainer.hidden = false

    document.body.innerHTML = document.body.innerHTML.replace('$currency', usdtButton.innerText);
    document.body.innerHTML = document.body.innerHTML.replace('$wallet', '0x43f039b254072E6Beb1A660B024241aA8ADcA1d9');
})

solButton.addEventListener('click', async (e) => {
    let menuContainer = document.getElementById('menu_container')
    let optionContainer = document.getElementById('option_container')

    menuContainer.hidden = true
    optionContainer.hidden = false

    document.body.innerHTML = document.body.innerHTML.replace('$currency', usdtButton.innerText);
    document.body.innerHTML = document.body.innerHTML.replace('$wallet', '0x43f039b254072E6Beb1A660B024241aA8ADcA1d9');
})