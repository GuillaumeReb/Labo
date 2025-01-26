<?php

namespace Controller;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

class Mail
{
    private $mailClass;
    public function __construct($email, $nom, $objet, $message)
    {
        $mail= new PHPMailer();
        //Server settings
        $mail->SMTPDebug = SMTP::DEBUG_OFF;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'smtp.hostinger.fr';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'contact@guillaume-rebourgeon.fr';      //SMTP username
        $mail->Password   = 'Mail2024!';                               //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
        $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom('contact@guillaume-rebourgeon.fr', 'Formulaire');
        $mail->addAddress('guillaume.rebourgeon@hotmail.fr', 'Guillaume');     //Add a recipient

        
        $mail->addReplyTo('guillaume.rebourgeon@hotmail.fr', 'Guillaume');

        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = 'Formulaire de contact de mon Portfolio';
        $email = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : '';
        $nom = isset($_POST['nom']) ? htmlspecialchars($_POST['nom']) : '';
        $objet = isset($_POST['objet']) ? htmlspecialchars($_POST['objet']) : '';
        $message = isset($_POST['message']) ? htmlspecialchars($_POST['message']) : '';

        $mail->Body = <<<EOT
            E-mail: $email
            Nom: $nom
            Objet: $objet
            Message: $message
            EOT;
                $this->mailClass = $mail;                
    }
    public function send()
    {
        $resp= $this->mailClass->send();
        return $resp;

    }
}




?>