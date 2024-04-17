const scannerContainer = document.getElementById('scanner-container');

QrScanner.WORKER_PATH = './node_modules/@nimiq/qr-scanner/dist/worker.min.js'; // Adjust path if necessary

const scanner = new QrScanner(scannerContainer, result => {
    alert('Decoded QR code:', result);
});

scanner.start(); 
