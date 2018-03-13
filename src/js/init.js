// Action Menu

$('.open-menu').on('click', function(){
  $('body').addClass('menu-open');
});
$('.close-menu, .menu-page-items .item a, .menu-header a').on('click', function(){
  $('body').removeClass('menu-open');
});