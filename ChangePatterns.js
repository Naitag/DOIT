Board.prototype.changePattern0 = function (self) {
    var isFieldClicked = false;
    if (self.userField[this.cell][this.quarter].state == "active") {
        self.userField[this.cell][this.quarter].html.style.backgroundColor = self.nonActiveColor;
        self.userField[this.cell][this.quarter].state = "nonActive";
        $('#moves').text('Moves: ' + ++self.moves);
    }
    else {
        for (var i = 0; i < 4; i++) {
            if (self.userField[this.cell][i].state == "active") {
                isFieldClicked = true;
            }
        }
        if (isFieldClicked === false) {
            self.userField[this.cell][this.quarter].html.style.backgroundColor = self.activeColor;
            self.userField[this.cell][this.quarter].state = "active";
            $('#moves').text('Moves: ' + ++self.moves);
        }
    }
};
Board.prototype.changePattern1 = function (self) {
    $('#moves').text('Moves: ' + ++self.moves);
    if (self.userField[this.cell][this.quarter].state == "nonActive") {
        self.userField[this.cell][this.quarter].html.style.backgroundColor = self.activeColor;
        self.userField[this.cell][this.quarter].state = "active";
    }
    else {
        self.userField[this.cell][this.quarter].html.style.backgroundColor = self.nonActiveColor;
        self.userField[this.cell][this.quarter].state = "nonActive";
    }

};
Board.prototype.changePattern2 = function (self) {
    var isFieldClicked = false;
        for (var i = 0; i < 4; i++) {
            if (self.userField[this.cell][i].state == "active") {
                isFieldClicked = true;
            }
        }
    if(isFieldClicked===false)
    {
        $('#moves').text('Moves: ' + ++self.moves);
        if(this.quarter==0)
        {
            self.userField[this.cell][3].html.style.backgroundColor = self.activeColor;
            self.userField[this.cell][3].state = "active";
        }
        else if(this.quarter==1)
        {
            self.userField[this.cell][2].html.style.backgroundColor = self.activeColor;
            self.userField[this.cell][2].state = "active";
        }
        else if(this.quarter==2)
        {
            self.userField[this.cell][1].html.style.backgroundColor = self.activeColor;
            self.userField[this.cell][1].state = "active";
        }
        else
        {
            self.userField[this.cell][0].html.style.backgroundColor = self.activeColor;
            self.userField[this.cell][0].state = "active";
        }
    }
    else{
        if (self.userField[this.cell][this.quarter].state == "active") {
            self.userField[this.cell][this.quarter].html.style.backgroundColor = self.nonActiveColor;
            self.userField[this.cell][this.quarter].state = "nonActive";
        }
    }
};
Board.prototype.changePattern3 = function (self) {
    var isFieldClicked = false;
    for (var i = 0; i < 4; i++) {
        if (self.userField[this.cell][i].state == "active") {
            isFieldClicked = true;
        }
    }
    if(isFieldClicked===false)
    {
        $('#moves').text('Moves: ' + ++self.moves);
        self.userField[this.cell][(this.quarter+1)%4].html.style.backgroundColor = self.activeColor;
        self.userField[this.cell][(this.quarter+1)%4].state = "active";
    }
    else
    {
        $('#moves').text('Moves: ' + ++self.moves);
        if (self.userField[this.cell][this.quarter].state == "active") {
            self.userField[this.cell][this.quarter].html.style.backgroundColor = self.nonActiveColor;
            self.userField[this.cell][this.quarter].state = "nonActive";
        }
    }
};