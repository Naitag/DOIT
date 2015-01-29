$(document).ready(function(){
    $('#moves').attr('unselectable', 'on') //zapobiega zaznaczaniu 'moves' podczas klikania
        .css({
            '-moz-user-select': '-moz-none',
            '-moz-user-select': 'none',
            '-o-user-select': 'none',
            '-khtml-user-select': 'none', /* you could also put this in a class */
            '-webkit-user-select': 'none', /* and add the CSS class here instead */
            '-ms-user-select': 'none',
            'user-select': 'none'
        }).bind('selectstart', function () {
            return false;
        });
    $('.back').click(function(){
        $('#menu').fadeIn('slow');
        $('#grid-container').hide();
        $('#moves').text('Moves: 0');
        $('#popup').hide();
    });
    $('#tutorial button').click(function() {
        $(this).parent().hide();
    });
});