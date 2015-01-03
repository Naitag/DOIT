<?php
    if(!isset($_POST['game-data']))
    {
        header('location: index.php');
    }
?>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <link href="style.css" type="text/css" rel="stylesheet">
    <title></title>
</head>
<body>
<div class="grid-container">
    <div id="user">
    <div class="grid-row">
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
    <div class="grid-row">
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
    <div class="grid-row">
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
    </div>
    <div id="result">
    <div class="grid-row">
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
    <div class="grid-row">
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
    <div class="grid-row">
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
</div>
<script src="jQuery.min.js"></script>
<script src="extra.js"></script>
<script src="Levels.js"></script>
<script src="Board.js"></script>
<script src="ChangePatterns.js"></script>
<?php
    $temp = $_POST['game-data'];
    echo    "<script>
            var board = new Board(9,4);
            board.setResultBoard(lvl[$temp]);
            window.onclick = function(){ return board.check($temp);};
            board.setChangePattern(lvl[$temp].changePattern);</script>";
?>
</body>
</html>