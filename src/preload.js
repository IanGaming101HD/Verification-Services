const {
  contextBridge,
  ipcRenderer
} = require('electron')

contextBridge.exposeInMainWorld('electron', {
  changeWindowSize: (width, height) => ipcRenderer.invoke('changeWindowSize', width, height),
  centreWindow: () => ipcRenderer.invoke('centreWindow'),
  copyToClipboard: (value) => ipcRenderer.invoke('copyToClipboard', value),
  createLogin: (username, email, password) => ipcRenderer.invoke('createLogin', username, email, password),
  findLogin: (firstInput, secondInput) => ipcRenderer.invoke('findLogin', firstInput, secondInput),
  readFileSync: (path, options) => ipcRenderer.invoke('readFileSync', path, options),
  writeFileSync: (path, data) => ipcRenderer.invoke('writeFileSync', path, data),
  services: ipcRenderer.invoke('services'),
  session: ipcRenderer.invoke('session')
})