const {
  contextBridge,
  ipcRenderer
} = require('electron')

contextBridge.exposeInMainWorld('electron', {
  changeWindowSize: (width, height) => ipcRenderer.invoke('changeWindowSize', width, height),
  copyToClipboard: (value) => ipcRenderer.invoke('copyToClipboard', value),
  logins: ipcRenderer.invoke('logins'),
  services: ipcRenderer.invoke('services')
})