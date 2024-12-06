<?php
$servername = "webinfo.iutmontp.univ-montp2.fr:3316";
$username = "fesqueta";
$password = "BonjourATous";
$dbname = "fesqueta";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("La connexion a échoué: " . $conn->connect_error);
}

$id = rand(1,5);

$sql = "SELECT url FROM QR_CODE WHERE id = $id";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Récupérer la ligne de résultat
    $row = $result->fetch_assoc();
    echo json_encode(["imageURL" => $row['url']]);
} else {
    // Si aucun résultat n'est trouvé, renvoyer un message d'erreur
    echo json_encode(["error" => "Image not found"]);
}

$conn->close();
?>


