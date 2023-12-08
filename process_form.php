<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "vivaldo.santana.ca@gmail.com";  // Substitua com seu endereço de e-mail do Gmail
    $subject = "Novo formulário de contato de $name";
    $headers = "From: $email";
    
    mail($to, $subject, $message, $headers);
}
?>