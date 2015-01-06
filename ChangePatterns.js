function changePattern0(cell,quarter,userField,active,nonActive)
{
    return function()
    {
        var isFieldClicked = false;
        for(var i=0;i<4;i++)
        {
            if(userField[cell][i].state=="active")
            {
                isFieldClicked = true;
            }
        }
        if(isFieldClicked===false)
        {
            userField[cell][quarter].html.style.backgroundColor = active;
            userField[cell][quarter].state = "active";
        }
        else
        {
            userField[cell][quarter].html.style.backgroundColor = nonActive;
            userField[cell][quarter].state = "nonActive";
        }
    };
}
function changePattern1(cell,quarter,userField,active,nonActive)
{
    return function()
    {
        if(userField[cell][quarter].state == "nonActive")
        {
            userField[cell][quarter].html.style.backgroundColor = active;
            userField[cell][quarter].state = "active";
        }
        else
        {
            userField[cell][quarter].html.style.backgroundColor = nonActive;
            userField[cell][quarter].state = "nonActive";
        }
    };
}
function changePattern2(cell,quarter,userField,active,nonActive)
{
    return function()
    {

    };
}