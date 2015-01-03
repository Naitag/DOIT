<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <script>
        function sendLevel(level)
        {
            document.getElementById("game-data").value = level;
            document.getElementById("myForm").submit();
        }
    </script>
    <body>
    <?php
    echo "<form id='myForm' action='game.php' method='post'>";
    echo "<input id='game-data' name='game-data' type='hidden' value=''></option>";
    echo "<ul>";
    if(isset($_COOKIE['level'])) {
        for ($i = 0; $i < $_COOKIE['level']+1; $i++) {
            echo "<li onclick='sendLevel($i)'>Level $i</li>";
        }
    }
    else
    {
        echo "<li onclick='sendLevel(0)'>Level 0</li>";
    }
    echo "</ul></form>";
    ?>
    </body>
</html>