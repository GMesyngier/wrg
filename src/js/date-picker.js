
$(function () {
  $('#datetimepicker').datetimepicker({
    format: 'DD / MM / YYYY',
    locale: 'es',
    inline: true,
    sideBySide: true,
    icons: {
      time: 'icon icon-clock',
      date: 'icon icon-calendar',
      up: 'icon icon-arrow-up',
      down: 'icon icon-arrow-down',
      previous: 'icon icon-arrow-left',
      next: 'icon icon-arrow-right',
      close: 'icon icon-cross'
    }
  });

  $('#datetimepicker2').datetimepicker({
    format: 'HH:mm',
    inline: true,
    sideBySide: true,
    stepping: 15,
    icons: {
      time: 'icon icon-clock',
      date: 'icon icon-calendar',
      up: 'icon icon-arrow-up',
      down: 'icon icon-arrow-down',
      previous: 'icon icon-arrow-left',
      next: 'icon icon-arrow-right',
      close: 'icon icon-cross'
    }
  });
});

function saveDate() {
  var date = $('#datetimepicker').data('date');
  var time = $('#datetimepicker2').data('date');
  $('#select-date').attr('value', date);
  $('#select-time').attr('value', time);
}