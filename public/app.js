$(document).ready(function() {
  $('form').on('submit', function(ev) {
    ev.preventDefault();
    var $name = $('#nick');
    var $line = $('#text');
    socket.emit('chat', {name: $name.val(), line: $line.val()});
    writeLine($name.val(), $line.val());
    $line.val("");
});

  $('.actions button').on('click', function(ev) {
  var $name = $('#nick');
  var $button = $(ev.currentTarget);
  socket.emit('action', {name: $name.val(), action: $button.data('type')});
  writeAction($name.val(), $button.data('type'));
  socket.on('action', function(data) {
  writeAction(data.name, data.action);
});
});

});