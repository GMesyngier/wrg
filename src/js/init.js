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
  overlay.addClass('overlay-opened');

  $('.close-overlay').on('click', function(e){
    var iconVehicle = $('.select-vehicle-slider-nav .slick-current img').attr('src');
    $(this).remove();
    $('.overlay-opened').removeClass('overlay-opened');
    $('.btn-vehicle .vehicle-name').html($('.select-vehicle-section input[type="radio"]:checked + label .vehicle-title').text());
    $('.btn-vehicle .vehicle-details').html($('.select-vehicle-section input[type="radio"]:checked + label .vehicle-description').text());
    $('.btn-vehicle .vehicle-price').html($('.select-vehicle-section input[type="radio"]:checked + label .price').text());
    $('.btn-vehicle .icon-vehicle').attr('src', iconVehicle);
    
  });
});

// Select Vehicle

$('.select-vehicle-slider').slick({
  centerMode: true,
  centerPadding: '40px',
  slidesToShow: 1,
  asNavFor: '.select-vehicle-slider-nav'
});

$('.select-vehicle-slider-nav').slick({
  asNavFor: '.select-vehicle-slider',
  focusOnSelect: true,
  slidesToShow: 4,
  arrows: false,
  dots: false
});

$('input:radio[name=vehicle1]').click();