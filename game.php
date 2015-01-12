<?php
    if(!isset($_POST['game-data']))//jesli nie zostal wybrany level, przekierowuje do index.php
    {
        header('location: index.php');//przekierowanie
    }
?>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="style.css" type="text/css" rel="stylesheet">
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <title></title>
</head>
<body>
    <div class="grid-container">
        <header>
            <h1>DO IT</h1>
        </header>

        <div id="user">

            <div class="grid-cell">
                <div class="grid-quarter-user"></div>
                <div class="grid-quarter-user"></div>
                <div class="grid-quarter-user"></div>
                <div class="grid-quarter-user"></div>
            </div>
            <div class="grid-cell">
                <div class="grid-quarter-user"></div>
                <div class="grid-quarter-user"></div>
                <div class="grid-quarter-user"></div>
                <div class="grid-quarter-user"></div>
            </div>
            <div class="grid-cell">
                <div class="grid-quarter-user"></div>
                <div class="grid-quarter-user"></div>
                <div class="grid-quarter-user"></div>
                <div class="grid-quarter-user"></div>
            </div>


            <div class="grid-cell">
                <div class="grid-quarter-user"></div>
                <div class="grid-quarter-user"></div>
                <div class="grid-quarter-user"></div>
                <div class="grid-quarter-user"></div>
            </div>
            <div class="grid-cell">
                <div class="grid-quarter-user"></div>
                <div class="grid-quarter-user"></div>
                <div class="grid-quarter-user"></div>
                <div class="grid-quarter-user"></div>
            </div>
            <div class="grid-cell">
                <div class="grid-quarter-user"></div>
                <div class="grid-quarter-user"></div>
                <div class="grid-quarter-user"></div>
                <div class="grid-quarter-user"></div>
            </div>


            <div class="grid-cell">
                <div class="grid-quarter-user"></div>
                <div class="grid-quarter-user"></div>
                <div class="grid-quarter-user"></div>
                <div class="grid-quarter-user"></div>
            </div>
            <div class="grid-cell">
                <div class="grid-quarter-user"></div>
                <div class="grid-quarter-user"></div>
                <div class="grid-quarter-user"></div>
                <div class="grid-quarter-user"></div>
            </div>
            <div class="grid-cell">
                <div class="grid-quarter-user"></div>
                <div class="grid-quarter-user"></div>
                <div class="grid-quarter-user"></div>
                <div class="grid-quarter-user"></div>
            </div>

        </div>
        <div id="result">

            <div class="grid-cell">
                <div class="grid-quarter-result"></div>
                <div class="grid-quarter-result"></div>
                <div class="grid-quarter-result"></div>
                <div class="grid-quarter-result"></div>
            </div>
            <div class="grid-cell">
                <div class="grid-quarter-result"></div>
                <div class="grid-quarter-result"></div>
                <div class="grid-quarter-result"></div>
                <div class="grid-quarter-result"></div>
            </div>
            <div class="grid-cell">
                <div class="grid-quarter-result"></div>
                <div class="grid-quarter-result"></div>
                <div class="grid-quarter-result"></div>
                <div class="grid-quarter-result"></div>
            </div>


            <div class="grid-cell">
                <div class="grid-quarter-result"></div>
                <div class="grid-quarter-result"></div>
                <div class="grid-quarter-result"></div>
                <div class="grid-quarter-result"></div>
            </div>
            <div class="grid-cell">
                <div class="grid-quarter-result"></div>
                <div class="grid-quarter-result"></div>
                <div class="grid-quarter-result"></div>
                <div class="grid-quarter-result"></div>
            </div>
            <div class="grid-cell">
                <div class="grid-quarter-result"></div>
                <div class="grid-quarter-result"></div>
                <div class="grid-quarter-result"></div>
                <div class="grid-quarter-result"></div>
            </div>


            <div class="grid-cell">
                <div class="grid-quarter-result"></div>
                <div class="grid-quarter-result"></div>
                <div class="grid-quarter-result"></div>
                <div class="grid-quarter-result"></div>
            </div>
            <div class="grid-cell">
                <div class="grid-quarter-result"></div>
                <div class="grid-quarter-result"></div>
                <div class="grid-quarter-result"></div>
                <div class="grid-quarter-result"></div>
            </div>
            <div class="grid-cell">
                <div class="grid-quarter-result"></div>
                <div class="grid-quarter-result"></div>
                <div class="grid-quarter-result"></div>
                <div class="grid-quarter-result"></div>
            </div>

        </div>
    </div>
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="js/bootstrap.min.js"></script>

    <script src="resp.js"></script>
<script src="extra/jQuery.min.js"></script>
<script src="extra/extra.js"></script>
<script src="Levels.js"></script>
<script src="Board.js"></script>
<script src="ChangePatterns.js"></script>
<?php
    $temp = $_POST['game-data'];//pobieram level (sprawdzanie jest na samej gorze)
    echo    "<script>
            var board = new Board(9,4);//tworzenie nowej planszy 9 kwadratow podzielonych na 4 czesci
            board.setResultBoard(lvl[$temp]);//ustawiam plansze rezultatu zgodnie z levelem (Levels.js)
            window.onclick = function(){ return board.check($temp);};//co klikniecie prawdzam czy uzytkownik nie przeszedl poziomy
            board.setChangePattern(lvl[$temp].changePattern);</script>";//ustawiam schemat zmian planszy uzytkownika zgodnie z levelem
?>
</body>
</html>