$('.open-menu').on('click', function(){
  $('body').addClass('menu-open');
});
$('.close-menu, .menu-page-items .item a, .menu-header a').on('click', function(){
  $('body').removeClass('menu-open');
});

$('input').on('click', function(event){
  event.preventDefault();
})

$(document).ready(function(){
  $('input').disabled = true;
});

$('.scroll-section').click(function(e) {
  e.preventDefault();
  var section = $(this).attr('href');
  $('html, body').animate({
      scrollTop: $(section).offset().top
  });
});
