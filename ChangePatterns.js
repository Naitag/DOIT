Board.prototype.changePattern0 = function (self) {
    var isFieldClicked = false;
    if (self.userField[this.cell][this.quarter].state == "active") {
        $(self.userField[this.cell][this.quarter].html).fadeOut('fast', $.proxy(function(){
            self.userField[this.cell][this.quarter].html.style.backgroundColor = self.nonActiveColor;
            self.userField[this.cell][this.quarter].state = "nonActive";
        },this));
        $(self.userField[this.cell][this.quarter].html).fadeIn('fast', function(){self.check(clickedLevel);});
        self.moves++;
        $('#moves').text('Moves: ' + self.moves);
        self.check(clickedLevel);
    }
    else {
        for (var i = 0; i < 4; i++) {
            if (self.userField[this.cell][i].state == "active") {
                isFieldClicked = true;
            }
        }
        if (isFieldClicked === false) {
            $(self.userField[this.cell][this.quarter].html).fadeOut('fast', $.proxy(function() {
                self.userField[this.cell][this.quarter].html.style.backgroundColor = self.activeColor;
                self.userField[this.cell][this.quarter].state = "active";
            },this));
            $(self.userField[this.cell][this.quarter].html).fadeIn('fast', function(){self.check(clickedLevel);});
            self.moves++;
            $('#moves').text('Moves: ' + self.moves);
        }
    }
};
Board.prototype.changePattern1 = function (self) {
    self.moves++;
    $('#moves').text('Moves: ' + self.moves);
    if (self.userField[this.cell][this.quarter].state == "nonActive") {
        $(self.userField[this.cell][this.quarter].html).fadeOut('fast', $.proxy(function() {
        self.userField[this.cell][this.quarter].html.style.backgroundColor = self.activeColor;
        self.userField[this.cell][this.quarter].state = "active";
        },this));
        $(self.userField[this.cell][this.quarter].html).fadeIn('fast', function(){self.check(clickedLevel);});
    }
    else {
        $(self.userField[this.cell][this.quarter].html).fadeOut('fast', $.proxy(function() {
        self.userField[this.cell][this.quarter].html.style.backgroundColor = self.nonActiveColor;
        self.userField[this.cell][this.quarter].state = "nonActive";
        },this));
        $(self.userField[this.cell][this.quarter].html).fadeIn('fast', function(){self.check(clickedLevel);});
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
        self.moves++;
        $('#moves').text('Moves: ' + self.moves);
        if(this.quarter===0)
        {
            $(self.userField[this.cell][3].html).fadeOut('fast', $.proxy(function() {
            self.userField[this.cell][3].html.style.backgroundColor = self.activeColor;
            self.userField[this.cell][3].state = "active";
            },this));
            $(self.userField[this.cell][3].html).fadeIn('fast', function(){self.check(clickedLevel);});
        }
        else if(this.quarter==1)
        {
            $(self.userField[this.cell][2].html).fadeOut('fast', $.proxy(function() {
            self.userField[this.cell][2].html.style.backgroundColor = self.activeColor;
            self.userField[this.cell][2].state = "active";
            },this));
            $(self.userField[this.cell][2].html).fadeIn('fast', function(){self.check(clickedLevel);});
        }
        else if(this.quarter==2)
        {
            $(self.userField[this.cell][1].html).fadeOut('fast', $.proxy(function() {
            self.userField[this.cell][1].html.style.backgroundColor = self.activeColor;
            self.userField[this.cell][1].state = "active";
            },this));
            $(self.userField[this.cell][1].html).fadeIn('fast', function(){self.check(clickedLevel);});
        }
        else
        {
            $(self.userField[this.cell][0].html).fadeOut('fast', $.proxy(function() {
            self.userField[this.cell][0].html.style.backgroundColor = self.activeColor;
            self.userField[this.cell][0].state = "active";
            },this));
            $(self.userField[this.cell][0].html).fadeIn('fast', function(){self.check(clickedLevel);});
        }
    }
    else{
        if (self.userField[this.cell][this.quarter].state == "active") {
            $(self.userField[this.cell][this.quarter].html).fadeOut('fast', $.proxy(function() {
            self.userField[this.cell][this.quarter].html.style.backgroundColor = self.nonActiveColor;
            self.userField[this.cell][this.quarter].state = "nonActive";
            },this));
            $(self.userField[this.cell][this.quarter].html).fadeIn('fast', function(){self.check(clickedLevel);});
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
        self.moves++;
        $('#moves').text('Moves: ' + self.moves);
        $(self.userField[this.cell][(this.quarter+1)%4].html).fadeOut('fast', $.proxy(function() {
        self.userField[this.cell][(this.quarter+1)%4].html.style.backgroundColor = self.activeColor;
        self.userField[this.cell][(this.quarter+1)%4].state = "active";
        },this));
        $(self.userField[this.cell][(this.quarter+1)%4].html).fadeIn('fast', function(){self.check(clickedLevel);});
    }
    else
    {
        self.moves++;
        $('#moves').text('Moves: ' + self.moves);
        if (self.userField[this.cell][this.quarter].state == "active") {
            $(self.userField[this.cell][this.quarter].html).fadeOut('fast', $.proxy(function() {
            self.userField[this.cell][this.quarter].html.style.backgroundColor = self.nonActiveColor;
            self.userField[this.cell][this.quarter].state = "nonActive";
            },this));
            $(self.userField[this.cell][this.quarter].html).fadeIn('fast', function(){self.check(clickedLevel);});
        }
    }
};
Board.prototype.changePattern4 = function(self)
{
    if(self.canBeClicked) {
        self.canBeClicked = false;
        var isFieldClicked = false;
        for (var i = 0; i < 4; i++) {
            if (self.userField[this.cell][i].state == "active") {
                isFieldClicked = true;
            }
        }
        if (isFieldClicked) {
            var temp = self.cellActiveQuarter[this.cell].curr;
            $(self.userField[this.cell][temp].html).fadeOut('fast', $.proxy(function () {
                self.userField[this.cell][temp].html.style.backgroundColor = self.nonActiveColor;
                self.userField[this.cell][temp].state = "nonActive";
            }, this));
            $(self.userField[this.cell][temp].html).fadeIn('fast', function () {
                self.check(clickedLevel);
                self.canBeClicked = true;
            });
            self.moves++;
        }
        else {
            if (self.cellActiveQuarter[this.cell].curr == -1) {
                self.cellActiveQuarter[this.cell].curr = 0;
                $(self.userField[this.cell][0].html).fadeOut('fast', $.proxy(function () {
                    self.userField[this.cell][0].html.style.backgroundColor = self.activeColor;
                    self.userField[this.cell][0].state = "active";
                }, this));
                $(self.userField[this.cell][0].html).fadeIn('fast', function () {
                    self.check(clickedLevel);
                    self.canBeClicked = true;
                });
                self.moves++;
            }
            else {
                self.cellActiveQuarter[this.cell].curr = (self.cellActiveQuarter[this.cell].curr + 1) % 4;
                var temp = self.cellActiveQuarter[this.cell].curr;
                $(self.userField[this.cell][temp].html).fadeOut('fast', $.proxy(function () {
                    self.userField[this.cell][temp].html.style.backgroundColor = self.activeColor;
                    self.userField[this.cell][temp].state = "active";
                }, this));
                $(self.userField[this.cell][temp].html).fadeIn('fast', function () {
                    self.check(clickedLevel);
                    self.canBeClicked = true;
                });
                self.moves++;
            }
        }
        $('#moves').text('Moves: ' + self.moves);
    }
};
Board.prototype.changePatternProtorype = function (self) {
    //if something
        $(self.userField[this.cell][this.quarter].html).fadeOut('fast', $.proxy(function() {
            self.userField[this.cell][this.quarter].html.style.backgroundColor = self.activeColor;
            self.userField[this.cell][this.quarter].state = "active";
        },this));
        $(self.userField[this.cell][this.quarter].html).fadeIn('fast', function(){self.check(clickedLevel);});
    self.moves++;
    $('#moves').text('Moves: ' + self.moves);
    //end if

};