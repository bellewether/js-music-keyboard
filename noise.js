$(document).ready( function() {

  var playNote = function(letter) {
    var audio = $("#" + letter + "Audio")[0];
    audio.play();
  };

  $('.instrument').on('click', 'button', function(event) {
    var note = $(this).html();
    playNote(note);
  });

  $( 'body' ).keydown( function(event) {
    var noteAudio = $( '#' + event.key + 'Audio')[0];
    noteAudio.play();
  });
  
});
