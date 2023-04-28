const balance = document.getElementById('balance')

balance.innerText = `${(await electron.getBalance() ? await electron.getBalance() : 0).toFixed(2)} €`