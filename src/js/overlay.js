$('.btn-overlay').on('click',function(e){
  e.preventDefault();
  var overlay = $('.overlay#' + $(this).attr('data-overlay'));
  overlay.addClass('overlay-opened');
});

function closeOverlay(e) {
  $(e).parent().removeClass('overlay-opened');
}