await electron.writeFileSync('./src/session.json', JSON.stringify({}))

location.href = '../login/index.html'
await electron.changeWindowSize(450, 310)
await electron.centreWindow()