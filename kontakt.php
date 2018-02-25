<?php

// Tworzymy zmienną dla imienia i nazwiska
$name = $_POST['name'];

// Tworzymy zmienną dla adresu email
$email = $_POST['email'];

// Tworzymy zmienną dla wiadomości
$text = $_POST['text'];

// Podajesz adres email na który chcesz otrzymać wiadomość
$dokogo = "folt3k@gmail.com";

// Podajesz tytuł jaki ma mieć ta wiadomość email
$tytul = "Formularz kontaktowy z movack.pl";

// Przygotowujesz treść wiadomości
$wiadomosc = "";
$wiadomosc .= "Imię: " . $name . "\n";
$wiadomosc .= "Email: " . $email . "\n";
$wiadomosc .= "Wiadomość: \n\n" . $text . "\n";

// Wysyłamy wiadomość
$sukces = mail($dokogo, $tytul, $wiadomosc, "Od: <$email>");

// Przekierowywujemy na potwierdzenie
if ($sukces){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=/movack3\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.html\">";
}
?>