function changePattern0(cell,quarter,field,active,nonActive)
{
    return function()
    {
        var isFieldClicked = false;
        for(var i=0;i<4;i++)
        {
            if(field[cell][i].style.backgroundColor==active)
            {
                isFieldClicked = true;
            }
        }
        if(isFieldClicked==false)
        {
            field[cell][quarter].style.backgroundColor = active;
        }
        else
        {
            field[cell][quarter].style.backgroundColor = nonActive;
        }
    };
}
function changePattern1(cell,quarter,field,active,nonActive)
{
    return function()
    {
        if(field[cell][quarter].style.backgroundColor == nonActive)
        {
            field[cell][quarter].style.backgroundColor = active;
        }
        else
        {
            field[cell][quarter].style.backgroundColor = nonActive;
        }
    };
}
function changePattern2(cell,quarter,field,active,nonActive)
{
    return function()
    {

    };
}