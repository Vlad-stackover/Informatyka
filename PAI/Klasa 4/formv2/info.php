<!DOCTYPE html>
<html lang="en">
<head>
    <title>Auto</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
</body>
</html>

<?php

function postSave($form_name){
    if (!empty($_POST[$form_name])) {
        return $_POST[$form_name];
    }
}
 
function getSave($form_name){
    if (!empty($_GET[$form_name])) {
        return $_GET[$form_name];
    }
}

function echoCheck($echo){
    if($echo == "on"){
        return "Jest";
    }elseif(!empty($echo)){
        return $echo;
    }else{
        return "Brak";
    }
}

$marka = postSave("marka");
$model = postSave("model");
$rok_produkcji = postSave("rok_produkcji");
$paliwo = postSave("paliwo");
$abs = postSave("abs");
$klimatyzacja = postSave("klimatyzacja");
$czujnik_parkowania = postSave("czujnik_parkowania");

if(isset($_POST["kolor"])){
    $kolor = $_POST["kolor"];
}




echo "<div class='info'>";

echo "Marka: " . htmlspecialchars(echoCheck($marka)) . "<br>";
echo "Model: " . htmlspecialchars(echoCheck($model)) . "<br>";
echo "Rok Produkcji: " . htmlspecialchars(echoCheck($rok_produkcji)) . "<br>";
echo "Paliwo: " . htmlspecialchars(echoCheck($paliwo)) . "<br>";
echo "Czy ABS: " . htmlspecialchars(echoCheck($abs)) . "<br>";
echo "Klimatyzacja: " . htmlspecialchars(echoCheck($klimatyzacja)) . "<br>";
echo "Czujnik Parkowania: " . htmlspecialchars(echoCheck($czujnik_parkowania)) . "<br>";
echo "Kolor: " . "<span style='color:$kolor'>████████████</span>";

echo "</div>";
?>