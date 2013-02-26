$(function () {
    //footer date
    $('footer').find('time').text((new Date).getFullYear());

    //header automatic resize
    $('.responsive_header').fitText();
    
    //contact info hover effect
    var social = $('.social p');

    social.hover(function () {
        $(this).children('a').stop().fadeToggle(300);
    });

    //home page i am effect
    var current = 1;
    var height = $('.roles').height();
    var numberDivs = $('.roles').children().length;
    var first = $('.roles div:nth-child(1)');
    setInterval(function () {
        var number = current * -height;
        first.css('margin-top', number + 'px');
        if (current === numberDivs) {
            first.css('margin-top', '0px');
            current = 1;
        } else current++;
    }, 2000);
});