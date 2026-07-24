<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';


if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $mail = new PHPMailer(true);

    try {
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;

$mail->Username = 'kitchendealsdaily7@gmail.com';
$mail->Password = 'efkf lser iezj tasf';

$mail->SMTPSecure = 'tls';
$mail->Port = 587;


        $mail->setFrom('kitchendealsdaily7@gmail.com','Amazon Kitchen');
        $mail->addAddress('kitchendealsdaily7@gmail.com');


        $mail->isHTML(true);
        $mail->Subject = 'New Contact Form Message';

        $mail->Body = "
        <h3>New Message</h3>
        <p><b>Name:</b> $name</p>
        <p><b>Email:</b> $email</p>
        <p><b>Message:</b><br>$message</p>
        ";


        $mail->send();

        echo "Message Sent Successfully!";


    } catch (Exception $e) {

    echo "SMTP Error: " . $mail->ErrorInfo;

}
}

?>