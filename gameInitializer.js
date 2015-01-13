function createGame() {
    var board = new Board(9, 4);//tworzenie nowej planszy 9 kwadratow podzielonych na 4 czesci
    board.setResultBoard(lvl[clickedLevel]);//ustawiam plansze rezultatu zgodnie z levelem (Levels.js)
    window.onclick = function () {
        return board.check(clickedLevel);
    };//co klikniecie prawdzam czy uzytkownik nie przeszedl poziomy
    board.setChangePattern(lvl[clickedLevel].changePattern);
    $('.back').unbind('click').click(function(){
        $('#menu').show();
        $('#grid-container').hide();
        $(this).hide();
        $('#moves').text('Moves: 0');
        if(nextLevel)
        {
            nextLevel = false;
            $('#menu ul').append('<li>Level ' + level + '</li>');
            $('#menu ul :last-child').click(function(){
                clickedLevel = level;
                createGame();
                $('#menu').hide();
                $('#grid-container').show();
            });
        }
        else if (lvl.length == parseInt(level)) {
            $('#menu ul').append('<li>More levels comming soon..</li>');
        }
    });
}