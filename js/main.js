$(function() {
    //Contact Info Hover Effect
    var social = $('.social p');
    social.hover(function() {
        $(this).children('a').stop().fadeToggle(300);
    });

    //Back to top scroll
    $('#top').on('click', function(e) {
        $('html, body').animate({scrollTop:0}, 'slow');
    });

    //Back to top button visibility
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#top').stop().animate({opacity: 1}, 400).css('pointer-events','auto');
        } else {
            $('#top').stop().animate({opacity: 0}, 400).css('pointer-events','none');
        }
    });
});