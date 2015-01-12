Board.prototype.changePattern0 = function(self)
{
    var isFieldClicked = false;
    if(self.userField[this.cell][this.quarter].state == "active")
    {
        self.userField[this.cell][this.quarter].html.style.backgroundColor = self.nonActiveColor;
        self.userField[this.cell][this.quarter].state = "nonActive";
        $('#moves').text('Moves: '+ ++self.moves);
    }
    else{
        for(var i=0;i<4;i++)
        {
            if(self.userField[this.cell][i].state == "active")
            {
                isFieldClicked = true;
            }
        }
        if(isFieldClicked===false)
        {
            self.userField[this.cell][this.quarter].html.style.backgroundColor = self.activeColor;
            self.userField[this.cell][this.quarter].state = "active";
            $('#moves').text('Moves: '+ ++self.moves);
        }
    }
};
Board.prototype.changePattern1 = function(self)
{
        $('#moves').text('Moves: '+ ++self.moves);
        if(self.userField[this.cell][this.quarter].state == "nonActive")
        {
            self.userField[this.cell][this.quarter].html.style.backgroundColor = self.activeColor;
            self.userField[this.cell][this.quarter].state = "active";
        }
        else
        {
            self.userField[this.cell][this.quarter].html.style.backgroundColor = self.nonActiveColor;
            self.userField[this.cell][this.quarter].state = "nonActive";
        }

};
