const scannerContainer = document.getElementById('scanner-container');

QrScanner.WORKER_PATH = './node_modules/@nimiq/qr-scanner/dist/worker.min.js'; // Adjust path if necessary

QrScanner.hasCamera().then(hasCamera => {
    if (hasCamera) {
        const scanner = new QrScanner(scannerContainer, result => {
            alert('Decoded QR code:', result);
            scanner.stop(); // Stop scanning after the first result
        });
        scanner.start(); 
    } else {
        console.error('No camera found.');
    }
});
