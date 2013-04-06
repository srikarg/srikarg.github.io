$(function () {
    //Contact Info Hover Effect
    var social = $('.social p');

    social.hover(function () {
        $(this).children('a').stop().fadeToggle(300);
    });
});