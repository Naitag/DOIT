<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<script>
    function sendLevel(level) //wysylanie levelu poprzez ukryty formularz
    {
        document.getElementById("game-data").value = level; //wpisanie levelu do formularza
        document.getElementById("myForm").submit(); //wyslanie formularza
    }
</script>
<body>
<?php
echo "<form id='myForm' action='game.php' method='post'>";  //formularz
echo "<input id='game-data' name='game-data' type='hidden' value=''></option>";//ukryte pole do korego wpisuje obecny level
echo "<ul>";
if (isset($_COOKIE['level'])) {  //sprawdzanie czy w ciasteczku jest zapisany level
    for ($i = 0; $i < $_COOKIE['level'] + 1; $i++) { //wypisywanie leveli od 0 do najnowszego ktory nie zostal ukonczony
        echo "<li onclick='sendLevel($i)'>Level $i</li>";
    }
    if($_COOKIE['level']==$_COOKIE['maxLevel']-1)
    {
        echo "<li>More levels soon..</li>";
    }
} else//jesli nie ma ciasteczka z levelem wyswietlam level 0
{
    echo "<li onclick='sendLevel(0)'>Level 0</li>";
}
echo "</ul></form>";
?>
</body>
</html>