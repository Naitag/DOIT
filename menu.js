$(document).ready(function(){
    $('#grid-container').hide();
    $('#popup').hide();
    if(level==null)
    {
        localStorage.setItem('level',0);
        level = 0;
    }
    if (lvl.length == parseInt(level)) {//jesli nie ma nastepnego levela
        for (var i = 0; i < parseInt(level); i++) {
            $('#menu ul').append('<li>Level ' + i + '</li>');
        }
        $('#menu ul').append('<li class="soon">More levels comming soon..</li>');
    }
    else {//jesli jest nastepny level
        for (var i = 0; i < parseInt(level) + 1; i++) {
            $('#menu ul').append('<li>Level ' + i + '</li>');
        }
    }
        $('li').each(function (index) {
            $(this).click(function () {
                clickedLevel = index;
                createGame();
                $('#menu').hide();
                $('#grid-container').fadeIn('slow');
            });
        });
});

