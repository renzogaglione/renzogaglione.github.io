<?php
if(isset($_POST['email'])) {
     
	$email_to = "regaglio@tin.it";
	$email_subject = "Contatto ricevuto dal sito internet";
	 
	 
	function died($error) {
	    // your error code can go here
	    echo "C'è stato un errore nell'invio dell'email";
	    echo "Gli errori sono riportati di seguito:<br /><br />";
	    echo $error."<br /><br />";
	    echo "Per favore correggi questi errori.<br /><br />";
	    die();
	}
	 
	// validation expected data exists
	if(!isset($_POST['first_name']) ||
	    !isset($_POST['email']) ||
	    !isset($_POST['message'])) {
	    died("C'è stato un errore nell'invio dell'email");       
	}
	 
	$name = $_POST['first_name']; // required
	$email_from = $_POST['email']; // required
	$message = $_POST['message']; // required
	 
	$error_message = "";
	$email_exp = "/^[a-z0-9]+([_\\.-][a-z0-9]+)*@([a-z0-9]+([\.-][a-z0-9]+)*)+\\.[a-z]{2,}$/i";
	if(!preg_match($email_exp,$email_from)) {
		$error_message .= 'L\'email che hai inserito non è valida.<br />';
	}    
	if(strlen($name) < 4) {
		$error_message .= 'Il nome che hai inserito non è valido.<br />';
	}
	if(strlen($message) < 4) {
		$error_message .= 'Il messaggio che hai inserito è troppo breve.<br />';
	}
	if(strlen($error_message) > 0) {
		died($error_message);
	}
	$email_message = "Dettagli contatto.\n\n";
	 
	function clean_string($string) {
		$bad = array("content-type","bcc:","to:","cc:","href");
		return str_replace($bad,"",$string);
	}
	 
	$email_message .= "Nome: ".clean_string($name)."\n";
	$email_message .= "Email: ".clean_string($email_from)."\n";
	$email_message .= "Messaggio: ".clean_string($message)."\n";
	          
	// create email headers
	$headers = 'From: '.$email_from."\r\n".'Reply-To: '.$email_from."\r\n" .'X-Mailer: PHP/' . phpversion();
	@mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<!-- include your own success html here -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Prof. a.c. Dott. Renzo Gaglione</title>
    <meta name="author" content="codice comunicazione/design" />
    <meta name="description" content="Prof. Dott. Renzo Gaglione, specializzato in ginecologia e ostetricia, esercita con passione a Chieti, Pescara, San Benedetto del Tronto e Roma. ">
    <meta name="keywords" content="ginecologo, ostetricia, chirurgo, chieti, pescara, roma, villa mafalda, villa anna, aied, laparoscopia, renzo, gaglione" />
    <link rel="stylesheet" type="text/css" href="css/reset.css" />
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <!--[if IE]>
    <link rel="stylesheet" type="text/css" href="css/ie.css" />
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <script src="js/scripts.min.js"></script>
  </head>
  <body id="home">
    <div id="wrapper">
      <div id="content">
<p>
		Grazie per avermi contattato. 
		
		A breve verrai reindirizzato su <a href="http://renzogalgione.it/">renzogaglione.it</a>
</p>	
		
	  </div>
	</div>
  </body>
</html>
<?php

function redirect($url,$tempo = FALSE ){
 if(!headers_sent() && $tempo == FALSE ){
  header('Location:' . $url);
 }elseif(!headers_sent() && $tempo != FALSE ){
  header('Refresh:' . $tempo . ';' . $url);
 }else{
  if($tempo == FALSE ){
    $tempo = 0;
  }
  echo "<meta http-equiv=\"refresh\" content=\"" . $tempo . ";" . $url . "\">";
  }
}

redirect('http://renzogaglione.it/',3);

}
?>