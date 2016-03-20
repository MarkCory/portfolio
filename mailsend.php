<?php
require 'PHPMailerAutoload.php';
include_once('class.phpmailer.php');

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$mail = new PHPMailer;

$mail->isSendmail();
$mail->SetFrom($request->replyAddress, $request->sendName);
$mail->AddReplyTo($request->replyAddress);
$mail->AddAddress('markcoryanderson@gmail.com', 'Mark Anderson');
$mail->Subject = "New message from markcoryanderson.com";
$mail->Body = $request->msg;


if(!$mail->send()) {
	echo "Message failed to send, if this error persists, send an email to markcoryanderson@gmail.com" . $mail->ErrorInfo;
} else {
	echo "Thank you for your message!";
}
?>