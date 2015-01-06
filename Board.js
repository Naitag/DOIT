var Board = function(cells ,quarters){
    this.cells = cells; //ilosc kwadratow
    this.quarters = quarters; //ilosc czesci w kwadracie (domyslnie 4 dlatego nazwa quarters, ale mozna ustawic wiecej)
    this.userField = [];
    this.resultField = [];
    this.activeColor = "red"; //kolor aktywnej czesci kwadratu
    this.notActiveColor = "black";
    this.level = 0;
    this.changePatterns = [changePattern0,changePattern1]; //tablica schematow zmian
    var quarterUser = document.getElementsByClassName("grid-quarter-user"); //pobieranie wszystkich czesci kwadratu uzytkownika
    var quarterResult = document.getElementsByClassName("grid-quarter-result");
    var temp = 0; //zmienna do poruszania sie po kolejnych elementac w quarterUser i quarterResult
    for(var i=0;i<this.cells;i++) //ustawianie tablic plansz
    {
        this.userField[i] = [];
        this.resultField[i] = [];
        for(var j=0;j<this.quarters;j++)
        {
            this.userField[i][j] = { //kazda czesc kwadratu ma pole html do manipulowania wygladem i state do manipulowania stanem (aby nie dalo sie zmienic htmla i oszukac gry)
                html: quarterUser[temp], //przypisanie czesci kwadratu do pola obiektu
                state: "nonActive"
            };
            this.resultField[i][j] = {
                html: quarterResult[temp],
                state: "nonActive"
            };
            this.userField[i][j].html.style.backgroundColor = this.notActiveColor;
            this.resultField[i][j].html.style.backgroundColor = this.notActiveColor;
            temp++;
        }
    }
    this.setChangePattern = function(number) { //ustawienie schematu zmian
        for (var i = 0; i < this.cells; i++) {
            for (var j = 0; j < this.quarters; j++) {//dla kazdej czesci kwadratu ustawiam zdarzenie onclick zalenie od wybranego schematu zmian
                this.userField[i][j].html.onclick = this.changePatterns[number](i, j, this.userField,this.activeColor, this.notActiveColor, this.level);
            }
        }
    };
    this.setResultBoard = function(level)//ustawienie planszy rezultatu
    {
        for(var i=0;i<this.cells;i++)
        {
            if(level.array[i]!==null)//zabezpienie przed wyjsciem poza tablice
            {
                this.resultField[i][level.array[i]].html.style.backgroundColor = this.activeColor;//przypisanie koloru do html
                this.resultField[i][level.array[i]].state = "active";//ustawienie stanu
            }
        }
    };
    /* jshint shadow:true */
    this.check = function(level){//sprawdzanie czy plansze sa takie same
        var quarters = this.cells * this.quarters;
        var temp = 0;
        for (var i = 0; i < this.cells; i++) {
            for (var j = 0; j < this.quarters; j++) {
                if(this.userField[i][j].state == this.resultField[i][j].state)//do sprawdzania uzywam stanu a nie html zeby nie dalo sie latwo oszukac gry podmieniajac html
                {
                    temp++;//zwiekszam licznik gdy pola maja taki sam stan
                }
            }
        }
        if(temp==quarters)//jesli liczba pol z takim samym stanem rowna sie ilosci wszystkich czesci kwadratu
        {
            for (var i = 0; i < this.cells; i++) {//usuwam zdarzenie onclick z kazdego pola uzytkownika
                for (var j = 0; j < this.quarters; j++) {
                    this.userField[i][j].html.onclick = function(){};//przypisujac pusta funkcje
                }
            }
            if(level+1<lvl.length) {//sprawdzam czy kolejny level istnieje (czy jest w Levels.js)
                setCookie("level", level + 1, 365);//ustawiam ciasteczko na kolejny level
            }
            window.onclick = function(){};//kasuje sprawdzanie plansz po kliknieciu
            alert("win");
            $('<div class="back"><a href="index.php">Wróć</a></div>').appendTo('body');//wyswietlam przycisk wroc
        }
    };
};