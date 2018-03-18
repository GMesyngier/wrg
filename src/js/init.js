// Action Menu

$('.open-menu').on('click', function(){
  $('body').addClass('menu-open');
});
$('.close-menu, .menu-page-items .item a, .menu-header a').on('click', function(){
  $('body').removeClass('menu-open');
});

$('.scroll-section').click(function(e) {
  e.preventDefault();
  var section = $(this).attr('href');
  $('html, body').animate({
      scrollTop: $(section).offset().top
  });
});


// Overlay

$('.btn-overlay').on('click',function(e){
  e.preventDefault();
  var overlay = $('.overlay#' + $(this).attr('data-overlay'));
  overlay.append('<a class="icon-cross close-overlay"></a>')
  overlay.fadeIn();
  overlay.addClass('overlay-opened');

  $('.close-overlay').on('click', function(e){
    $(this).remove();
    $('.overlay-opened').fadeOut();
    $('.overlay-opened').removeClass('overlay-opened');
  });
});


// Slider

$('.select-vehicle-slider').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3
});