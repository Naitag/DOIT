$(window).resize(function () {
    if ($(window).width() < 790) {
        $('.grid-container').width('364px');
        $('#result').css({'margin-left': '0px', 'margin-top': '10px'});
    }
    else {
        $('.grid-container').width('778px');
        $('#result').css({'margin-left': '50px', 'margin-top': '0px'});
    }
});