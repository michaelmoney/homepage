<?php 
 session_start(); 
 $czas = date("G:i:s",time());
 $data = date("d/m/y");


// TYTUL E-MAILA


$temat = "Pytanie z www.michaelmoney.pl  - " . $_POST[lastname] . " -" . $_POST[email] . " - " . $data;
$tytul = "=?UTF-8?B?".base64_encode($temat)."?=";
  

// TRESC E-MAILA W HTML
$tresc = "<html><head><meta charset='utf-8'></head>";
$tresc .="<table style='font-family:Arial;color:#4C4C4C;border:1px solid #D0D0D0;width:600px;padding:30px;'>";
$tresc .="<tr><td><img src='http://foto-druk.pl/wp-content/themes/tungstenation/images/site-title.png' style='border:0px;width:150px;'></td></tr>";
$tresc .="<h1 style='font-size:20px;border-bottom:1px solid #F5B45F;'>Szczegóły zapytania</h1>";
$tresc .="<p style='font-size:16px;color:#A57B65;font-weight:bold;'>Zamówione złożone: <span style='color:#000;'>" .$data. " o godzinie " .$czas . "</span></p>";
$tresc .="<p style='font-size:16px;color:#A57B65;font-weight:bold;'>Nazwisko: <span style='color:#000;'>" .$_POST[lastname]. "</span></p>";
$tresc .="<p style='font-size:16px;color:#A57B65;font-weight:bold;'>E-mail: <span style='color:#000;'>" .$_POST[email]. "</span></p>";
$tresc .="<p style='font-size:16px;color:#A57B65;font-weight:bold;'>Wiadomość: <span style='color:#000;'>" .$_POST[message]. "</span></p>";
$tresc .="</td></tr></table></html>";


// NADAWCY E-MAILA
$to = "kontakt@michaelmoney.pl";

// TYTUL E-MAILA
$subject = $tytul;

// TRESC E-MAILA
$message = $tresc;

// NAGLOWKI E-MAILA
$headers = "From: " . "MichaelMoney Studio" . "\r\n";
$headers .= "Reply-To: ". "kontakt@michaelmoney.pl" . "\r\n";
$headers .= "CC: kontakt@michaelmoney.pl\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=utf-8\r\n";

 if(mail($to,$subject,$message,$headers))
        {
            echo "Message Sent";
        }
        else
        {
             echo "Message Not Sent";
        }

?>



