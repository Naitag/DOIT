$(document).ready(function(){
    $('#back').unbind('click').click(function(){
        $('#menu').fadeIn('slow');
        $('#grid-container').hide();
        $('#moves').text('Moves: 0');
        if(nextLevel)
        {
            nextLevel = false;
            $('#menu ul').append('<li>Level ' + level + '</li>');
            $('#menu ul :last-child').on('click',function(){
                clickedLevel = $(this).index();
                createGame();
                $('#menu').hide();
                $('#grid-container').fadeIn('slow');
            });
        }
        else if (lvl.length == parseInt(level)&&!$('#menu ul li:last-child').hasClass('soon')) {
            $('#menu ul').append('<li class="soon">More levels comming soon..</li>');
        }
        $('#popup').hide();
    });
    $('#retry').click(function(){
        createGame();
        $('#moves').text('Moves: 0');
        $('#popup').fadeOut('slow');
        if(nextLevel)
        {
            nextLevel = false;
            $('#menu ul').append('<li>Level ' + level + '</li>');
            $('#menu ul :last-child').on('click',function(){
                clickedLevel = $(this).index();
                createGame();
                $('#menu').hide();
                $('#grid-container').fadeIn('slow');
            });
        }
        else if (lvl.length == parseInt(level)&&!$('#menu ul li:last-child').hasClass('soon')) {
            $('#menu ul').append('<li class="soon">More levels comming soon..</li>');
        }
    });
});
