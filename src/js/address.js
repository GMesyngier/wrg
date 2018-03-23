function saveAddressFrom() {
  var address = $('.select-address-from .map-control').val();
  var contact = $('.select-address-from .name').val();
  var telephone = $('.select-address-from .telephone').val();
  $('.from-address').html(address);
  $('.from-contact').html(contact);
}

function saveAddressTo(){
  var address = $('.select-address-to .map-control').val();
  var contact = $('.select-address-to .name').val();
  var telephone = $('.select-address-to .telephone').val();
  $('.to-address').html(address);
  $('.to-contact').html(contact);
}