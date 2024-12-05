package org.example;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.EncodeHintType;
import com.google.zxing.WriterException;
import com.google.zxing.qrcode.QRCodeWriter;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;

import java.io.IOException;
import java.nio.file.FileSystems;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.Map;

public class qrCode {

  public static void genererQrCode(String qrText){
    String filePath = "qrcode.png"; // Chemin pour sauvegarder le QR Code
    int width = 250;
    int height = 250;

    // Paramètres d'encodage pour ajuster la marge
    Map<EncodeHintType, Object> hints = new HashMap<>();
    hints.put(EncodeHintType.MARGIN, 1); // Ajustez cette valeur pour changer la taille des marges (par défaut 4)

    try {
      QRCodeWriter qrCodeWriter = new QRCodeWriter();
      BitMatrix bitMatrix = qrCodeWriter.encode(qrText, BarcodeFormat.QR_CODE, width, height, hints);

      Path path = FileSystems.getDefault().getPath(filePath);
      MatrixToImageWriter.writeToPath(bitMatrix, "PNG", path);

      System.out.println("QR Code généré avec succès avec une marge personnalisée : " + filePath);
    } catch (WriterException | IOException e) {
      e.printStackTrace();
    }
  }
}
