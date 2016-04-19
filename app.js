$(document).ready(function() {
  var text = '';
  $('.char').click(function() {
    text += $(this).text();
    $('input').val(text);
    $('#clear').text('C');
  });

  $('#equals').click(function() {
    $('input').val(eval(text));
    $('#clear').text('AC');
  })

  $('#clear').click(function() {
    text = '';
    $('input').val(text);
    $('#clear').text('AC');
  })

})