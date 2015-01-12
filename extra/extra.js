function setCookie(cname, cvalue, exdays) { //ustawianie ciasteczka
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) { //pobieranie ciasteczka
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}
$('#moves').attr('unselectable','on') //zapobiega zaznaczaniu 'moves' podczas klikania
    .css({'-moz-user-select':'-moz-none',
        '-moz-user-select':'none',
        '-o-user-select':'none',
        '-khtml-user-select':'none', /* you could also put this in a class */
        '-webkit-user-select':'none',/* and add the CSS class here instead */
        '-ms-user-select':'none',
        'user-select':'none'
    }).bind('selectstart', function(){ return false; });