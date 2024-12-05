package org.example;
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.print("Entrez l'url de votre site : ");
    String url = sc.nextLine();
    System.out.println();
    qrCode.genererQrCode("google.com");
  }
}

