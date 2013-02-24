$(function () {
    //footer date
    $('footer').find('time').text((new Date).getFullYear());

    //header automatic resize
    $('.responsive_header').fitText();

    //contact info hover effect
    var div = $('div.info');

    div.hover(function () {
        $(this).children('a').fadeToggle();
    });

    //home page i am effect
    var current = 1;
    var first = $('.roles div:nth-child(1)');
    setInterval(function () {
        var number = current * -50;
        first.css('margin-top', number + 'px');
        if (current === 4) {
            first.css('margin-top', '0px');
            current = 1;
        } else current++;
    }, 2000);
});