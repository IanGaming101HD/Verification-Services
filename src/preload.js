const {
  contextBridge,
  ipcRenderer
} = require('electron')

contextBridge.exposeInMainWorld('electron', {
  // newWindow: (width, height) => ipcRenderer.invoke('newWindow'),
  newWindow2: (width, height) => ipcRenderer.invoke('newWindow2'),
  newWindow: async (width, height) => {
    const win = await ipcRenderer.invoke('newWindow', width, height)
    return {
      id: win.id
    }
  },
  logins: ipcRenderer.invoke('logins')
})