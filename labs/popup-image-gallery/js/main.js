$(function() {
  var images = $('.images');
  var image = $('.images>img');
  var current = -1;
  var focus = $('.focus');
  var container = $('.focus .container');
  var close = $('.close');
  var next = $('.next');
  var prev = $('.prev');
  
  image.on('click', function() {
    current = $('img').index($(this));
    container.empty();
    container.append('<img src=\"' + image.eq(current).attr('src') + '\" />');
    focus.fadeIn().addClass('enabled');
    images.addClass('darken');
    images.append('<div class="overlay"></div>');
    $('html, body').animate({
      scrollTop: focus.offset().top - 50
    }, 500);
  });
  
  close.on('click', function() {
    focus.css('display', 'none').removeClass('enabled');
    images.removeClass('darken');
    $('.overlay').remove();
  });
  
  prev.on('click', function() {
    current = (current - 1 < 0) ? image.length - 1 : current - 1;
    container.empty();
    container.append('<img src=\"' + image.eq(current).attr('src') + '\" />');
  });
  
  next.on('click', function() {
    current = (current + 1 > image.length - 1) ? 0 : current + 1;
    container.empty();
    container.append('<img src=\"' + image.eq(current).attr('src') + '\" />');
  });
});