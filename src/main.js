const path = require('path')
const {
  app,
  BrowserWindow,
  ipcMain,
  clipboard
} = require('electron');
const logins = require('./logins.json')

let createWindow = () => {
  let win = new BrowserWindow({
    width: 450,
    height: 310,
    icon: './src/icon.png',
    autoHideMenuBar: true,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      devTools: false
    }
  })
  ipcMain.handle('changeWindowSize', (event, width, height) => win.setSize(width, height))
  ipcMain.handle('copyToClipboard', (event, value) => clipboard.writeText(value))
  ipcMain.handle('logins', () => logins)
  win.loadFile('./src/public/login/index.html')
}

app.once('ready', () => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})