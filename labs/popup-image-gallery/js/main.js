$(function(){
  var image = $('.images>img');
  var box = $('.focus');
  var close = $('.focus .close');
  var images = $('.images');
  
  image.on('click', function(){
    var $this = $(this);
    var src = $this.attr('src');
    box.find('img').remove();
    box.append('<img src=\"'+src+'\" />');
    box.fadeIn();
    images.addClass('darken');
    images.append('<div class="overlay">');
  });
  
  close.on('click', function(){
    box.css('display', 'none');
    images.removeClass('darken');
    $('.overlay').remove();
  });
});