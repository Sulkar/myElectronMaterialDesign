// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const ipc = require('electron').ipcRenderer;

const printPDFButton = document.getElementById('btn_print');
printPDFButton.addEventListener('click', function(event){
  ipc.send('myPrinter');
});
