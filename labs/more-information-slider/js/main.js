$(function(){
  var image = $('.quarter>img');
  
  image.on('click', function(){
    $('.info').stop().slideUp();
    $(this).siblings('.info').slideToggle();
  });
});