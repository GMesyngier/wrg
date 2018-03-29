$('.select-vehicle-slider').slick({
  centerMode: true,
  centerPadding: '0',
  slidesToShow: 1,
  asNavFor: '.select-vehicle-slider-nav',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        centerPadding: '15px',
      }
    }
  ]
});

$('.select-vehicle-slider-nav').slick({
  asNavFor: '.select-vehicle-slider',
  focusOnSelect: true,
  slidesToShow: 4,
  arrows: false,
  dots: false
});

function buttonVehicleData() {
  var iconVehicle = $('.select-vehicle-slider-nav .slick-current img').attr('src');
  $('.btn-vehicle .vehicle-name').html($('.select-vehicle-section input[type="radio"]:checked + label .vehicle-title').text());
  $('.btn-vehicle .vehicle-details').html($('.select-vehicle-section input[type="radio"]:checked + label .vehicle-description').text());
  $('.btn-vehicle .vehicle-price').html($('.select-vehicle-section input[type="radio"]:checked + label .price').text());
  $('.btn-vehicle .icon-vehicle').attr('src', iconVehicle);
}