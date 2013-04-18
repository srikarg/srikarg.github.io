$(function() {
    //Contact Info Hover Effect
    var social = $('.social p');
    social.hover(function() {
        $(this).children('a').stop().fadeToggle(300);
    });

    //Smooth scrolling links
    $('.table-of-contents a[href^="#"], #top').on('click', function(e) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length == 0) target = $('html');
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 500);
        $('body').focus();
    });

    //Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#top').stop().animate({opacity: 1}, 400).css('pointer-events','auto');
        } else {
            $('#top').stop().animate({opacity: 0}, 400).css('pointer-events','none');
        }
    });
});