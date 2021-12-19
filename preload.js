const nodecrypto = require('crypto')
const file_sys = require('fs')
const { contextBridge, ipcRenderer } = require('electron')


contextBridge.exposeInMainWorld
(
  'nodecrypto',
  {
    do_checksum: (path) =>  { 

      console.log("I received as path "+path);

      var file_buffer=file_sys.readFileSync(path);
      
      const hash = nodecrypto.createHash('md5');
      hash.update(file_buffer);
      return hash.digest('hex');
      
    }
  }
)
