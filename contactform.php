<$?php 

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $subject = $_POST['subject'];
  $mailFrom = $_POST['mail'];
  $message = $_POST['message'];

  $mailTo = "DatariTurnerProductions@zoho.com"
  $headers = "From: ".$mailFrom ;
  $txt = "You have received an email from " .$name.".\n\n".$message;


  mail($subject, $txt, $headers );
  header("Location: index.php?mailsend");
}