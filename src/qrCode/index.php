<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QR Code Generator</title>
    <script src="https://cdn.jsdelivr.net/npm/qrcode/build/qrcode.min.js"></script>
    <script src="qrCode.js" defer></script>
    <style>
        /* Centrer le canvas contenant le QR Code */
        #qrCanvas {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border: none;  /* Enlever la bordure */
        }

        /* Ajouter un style pour le canvas de l'image */
        #imageCanvas {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border: 1px solid black; /* Bordure pour l'image si souhaitée */
        }

        /* Canvas combiné */
        #combinedCanvas {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border: 1px solid black;
        }

        /* Centrer le contenu de la page */
        body {
            margin: 0;
            padding: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f0f0f0;
        }
    </style>
</head>
<body>
    <div>
        <input id="text" placeholder="Enter text or URL" type="text" />
        <button onclick="generateQRCode()">Generate QR Code</button>
    </div>
    <br>
    <canvas id="qrCanvas" width="1024" height="1024" style="position: absolute;top: 50%;left: 50%;"></canvas>
    <canvas id="imageCanvas" width="1024" height="1024"></canvas>
    <canvas id="combinedCanvas" width="1024" height="1024"></canvas>
</body>
</html>
