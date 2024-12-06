document.addEventListener('DOMContentLoaded', function () {

    console.log("hello world!");

    fetch('database.php')
        .then(response => response.json()) // Convertir la réponse en JSON
        .then(data => {
            const imageURL = data.imageURL; // URL de l'image
            console.log('URL de l\'image:', imageURL);

            // Obtenez les trois canvas
            const qrCanvas = document.getElementById('qrCanvas');
            const imageCanvas = document.getElementById('imageCanvas');
            const combinedCanvas = document.getElementById('combinedCanvas');
            const qrContext = qrCanvas.getContext('2d');
            const imageContext = imageCanvas.getContext('2d');
            const combinedContext = combinedCanvas.getContext('2d');

            // Récupérer le texte à encoder en QR Code
            const text = "https://www.raceforwater.org/fr/";

            if (!text.trim()) {
                alert("Veuillez entrer du texte ou une URL valide !");
                return;
            }

            // Générer le QR Code sur le qrCanvas
            QRCode.toCanvas(
                qrCanvas,
                text,
                {
                    width: 200, // Largeur du QR Code
                    color: {
                        dark: "#000000", // Couleur des points (noir)
                        light: "#ffffff", // Couleur de fond (blanc)
                    },
                    errorCorrectionLevel: "H", // Niveau de correction d'erreur
                    margin: 0, // Marge du QR code
                },
                function (error) {
                    if (error) {
                        console.error("Erreur lors de la génération du QR Code :", error);
                    } else {
                        console.log("QR Code généré avec succès !");
                    }

                    // Charger et dessiner l'image sur le imageCanvas
                    const img = new Image();
                    img.src = imageURL;

                    img.onload = function () {
                        // Dessiner l'image sur le imageCanvas
                        imageContext.drawImage(img, 0, 0, imageCanvas.width, imageCanvas.height);
                        console.log('Image affichée sur le canvas de l\'image !');

                        // Maintenant superposer les deux canvas (image et QR code) sur le canvas combiné
                        combineCanvases(qrCanvas, imageCanvas, combinedCanvas, qrContext, imageContext, combinedContext);
                    };

                    img.onerror = function () {
                        console.error('Erreur lors du chargement de l\'image.');
                    };
                }
            );
        })
        .catch(error => {
            console.error('Erreur lors de la requête fetch:', error);
        });
});

// Fonction pour superposer les deux canvases et centrer le QR Code
function combineCanvases(qrCanvas, imageCanvas, combinedCanvas, qrContext, imageContext, combinedContext) {
    // Effacer le canvas combiné
    combinedContext.clearRect(0, 0, combinedCanvas.width, combinedCanvas.height);

    // Dessiner l'image du canvas imageCanvas sur le canvas combiné
    combinedContext.drawImage(imageCanvas, 0, 0);

    // Dessiner le QR Code du canvas qrCanvas sur le canvas combiné par-dessus l'image
    const qrWidth = qrCanvas.width;
    const qrHeight = qrCanvas.height;

    // Calculer la position pour centrer le QR code
    const xPos = (combinedCanvas.width - qrWidth) / 2;
    const yPos = (combinedCanvas.height - qrHeight) / 2;

    // Dessiner le QR Code centré
    combinedContext.drawImage(qrCanvas, xPos, yPos);
}
