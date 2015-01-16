$(window).on('resize',function () {
    if ($(window).width() < 790) {
        $('.container').width('364px');
        $('#result').css({'margin-left': '0px', 'margin-top': '10px'});
    }
    else {
        $('.container').width('778px');
        $('#result').css({'margin-left': '50px', 'margin-top': '0px'});
    }
    var pop = $('#popup-window');
    pop.css('top',Math.max(0, (($(window).height() - pop.outerHeight()) / 2) +
    $(window).scrollTop()) + "px").css('left', Math.max(0, (($(window).width() - pop.outerWidth()) / 2) +
    $(window).scrollLeft()) + "px");
}).resize();