$('.item-menu').hover(function() {
  var x = $(this);
  $('.menu__line').stop().animate({
    'height': x.height(),
    'top' : x.position().top
  }, 300);
});
