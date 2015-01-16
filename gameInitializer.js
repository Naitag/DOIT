var clickedLevel = -1;
var level = localStorage.getItem('level');
var nextLevel = false;
function createGame() {
    var board = new Board(9, 4);//tworzenie nowej planszy 9 kwadratow podzielonych na 4 czesci
    board.setResultBoard(lvl[clickedLevel]);//ustawiam plansze rezultatu zgodnie z levelem (Levels.js)
    board.setChangePattern(lvl[clickedLevel].changePattern);
}