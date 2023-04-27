const path = require('path')
const {
  app,
  BrowserWindow,
  ipcMain,
  clipboard
} = require('electron');
const fs = require('fs')
const mongoose = require('mongoose');
const services = require('./services.json')
const session = require('./session.json')
const loginSchema = require('./schemas/loginSchema');

let createWindow = () => {
  let win;
  if (Object.keys(session).length === 0 || session.username === '' || session.password === '') {
    win = new BrowserWindow({
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
    win.loadFile('./src/public/login/index.html')
  } else {
    win = new BrowserWindow({
      width: 1250,
      height: 725,
      icon: './src/icon.png',
      autoHideMenuBar: true,
      resizable: false,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        devTools: false
      }
    })
    win.loadFile('./src/public/menu/index.html')
  }
  ipcMain.handle('changeWindowSize', (event, width, height) => win.setSize(width, height))
  ipcMain.handle('centreWindow', (event, width, height) => win.center())
  ipcMain.handle('copyToClipboard', (event, value) => clipboard.writeText(value))
  ipcMain.handle('readFileSync', (event, path, options) => fs.readFileSync(path, options))
  ipcMain.handle('writeFileSync', (event, path, data) => fs.writeFileSync(path, data))
  ipcMain.handle('createLogin', async (event, username, email, password) => {
    await loginSchema.create({
      username: username,
      email: email,
      password: password
    })
  })
  ipcMain.handle('findLogin', async (event, firstInput, secondInput) => {
    if (firstInput.includes('@')) {
      let data = await loginSchema.findOne({
        email: firstInput,
        password: secondInput
      })
      return data
    } else {
      let data = await loginSchema.findOne({
        username: firstInput,
        password: secondInput
      })
      if (data) return data
    }
    return null
  })
  ipcMain.handle('services', () => services)
  ipcMain.handle('session', () => session)
}

app.once('ready', () => {
  mongoose.connect('mongodb+srv://reaperianbusiness:HgoROfadxeMNHSNs@blip.cvd34sx.mongodb.net/login')

  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  console.log('hi')
  if (process.platform !== 'darwin') {
    app.quit()
  }
})