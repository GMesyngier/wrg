function saveAddressFrom() {
  var address = $('.select-address-from .map-control').val();
  var contact = $('.select-address-from .name').val();
  var telephone = $('.select-address-from .telephone').val();
  $('#select-from').attr('value', address);
  $('.contact-people.from .item-contact').html(contact);
}

function saveAddressTo(){
  var address = $('.select-address-to .map-control').val();
  var contact = $('.select-address-to .name').val();
  var telephone = $('.select-address-to .telephone').val();
  $('#select-to').attr('value', address);
  $('.contact-people.to .item-contact').html(contact);
}