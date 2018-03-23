$('.btn-dropdown').on('click',function(e){
  e.preventDefault();
  $(this).toggleClass('btn-dropdown-opened');
  var dropdown = $('.dropdown#' + $(this).attr('data-dropdown'));
  dropdown.toggleClass('dropdown-opened');
});