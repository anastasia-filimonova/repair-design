<?php

$userName = $_POST['userName'];
$userEmail = $_POST['userEmail'];
$userPhone = $_POST['userPhone'];
$userQuestion = $_POST['userQuestion'];

// Load Composer's autoloader
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'design.repair.filimonova@gmail.com';                     // SMTP username
    $mail->Password   = 'EKlyo4jC';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 465;
    $mail->CharSet = "utf-8";                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('design.repair.filimonova@gmail.com', 'Анастасия');
    $mail->addAddress('anastasia.filimonova@list.ru');     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = "Новая заявка с сайта";
    $mail->Body    = "Имя пользователя: ${userName} <br> 
    Телефон пользователя: ${userPhone} <br> 
    Email пользователя: ${userEmail} <br> 
    Вопрос пользователя: ${userQuestion}";

    
    if ($mail->send()) {
        echo "Ок";
    } else {
        echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}
       
} catch (Exception $e) {
    echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}