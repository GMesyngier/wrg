$('.special-list .item-special').on('click', function() {
  $('.special-list .item-special').removeClass('current');
  $(this).addClass('current');
});