<?php
  $name = $_Post['name'];
  $visitor_email = $_POST ['email'];


  $email_form = 'leigh.tm@gmail.com';

  $email_subject = "You have mail from your website";

  $email_body = "User Name: $name.\n".
    "User Email: $visitor_email.\n".
        "User Message: $message.\n";

$to = "leigh.tm@gmail.com";

$headers = "From: $email_from \r\n";

$headers .= "Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: index.html");
?>