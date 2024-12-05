import com.google.zxing.BarcodeFormat;
import com.google.zxing.WriterException;
import com.google.zxing.qrcode.QRCodeWriter;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;

import java.io.IOException;
import java.nio.file.FileSystems;
import java.nio.file.Path;

public class QRCodeGenerator {
  public static void main(String[] args) {
    String qrText = "https://example.com"; // Texte ou URL à encoder
    String filePath = "qrcode.png"; // Chemin pour sauvegarder le QR Code
    int width = 300;
    int height = 300;

    try {
      QRCodeWriter qrCodeWriter = new QRCodeWriter();
      BitMatrix bitMatrix = qrCodeWriter.encode(qrText, BarcodeFormat.QR_CODE, width, height);

      Path path = FileSystems.getDefault().getPath(filePath);
      MatrixToImageWriter.writeToPath(bitMatrix, "PNG", path);

      System.out.println("QR Code généré avec succès : " + filePath);
    } catch (WriterException | IOException e) {
      e.printStackTrace();
    }
  }
}
