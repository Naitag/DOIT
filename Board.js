var Board = function(cells ,quarters){
    this.cells = cells;
    this.quarters = quarters;
    this.userField = [];
    this.resultField = [];
    this.activeColor = "red";
    this.notActiveColor = "black";
    this.level = 0;
    this.changePatterns = [changePattern0,changePattern1];
    var quarterUser = document.getElementsByClassName("grid-quarter-user");
    var quarterResult = document.getElementsByClassName("grid-quarter-result");
    var temp = 0;
    for(var i=0;i<this.cells;i++)
    {
        this.userField[i] = [];
        this.resultField[i] = [];
        for(var j=0;j<this.quarters;j++)
        {
            this.userField[i][j] = quarterUser[temp];
            this.resultField[i][j] = quarterResult[temp];
            this.userField[i][j].style.backgroundColor = this.notActiveColor;
            this.resultField[i][j].style.backgroundColor = this.notActiveColor;
            temp++;
        }
    }
    this.setChangePattern = function(number) {
        for (var i = 0; i < this.cells; i++) {
            for (var j = 0; j < this.quarters; j++) {
                this.userField[i][j].onclick = this.changePatterns[number](i, j, this.userField, this.activeColor, this.notActiveColor, this.level);
            }
        }
    };
    this.setResultBoard = function(level)
    {
        for(var i=0;i<this.cells;i++)
        {
            if(level.array[i]!=null)
            {
                this.resultField[i][level.array[i]].style.backgroundColor = this.activeColor;
            }
        }
    };
    this.check = function(level){
        var quarters = this.cells * this.quarters;
        var temp = 0;
        for (var i = 0; i < this.cells; i++) {
            for (var j = 0; j < this.quarters; j++) {
                if(this.userField[i][j].style.backgroundColor == this.resultField[i][j].style.backgroundColor)
                {
                    temp++;
                }
            }
        }
        if(temp==quarters)
        {
            for (var i = 0; i < this.cells; i++) {
                for (var j = 0; j < this.quarters; j++) {
                    this.userField[i][j].onclick = function(){};
                }
            }
            if(level+1<lvl.length) {
                setCookie("level", level + 1, 365);
            }
            window.onclick = function(){};
            alert("win");
            $('<div class="back"><a href="index.php">Wróć</a></div>').appendTo('body');
        }
    }
};