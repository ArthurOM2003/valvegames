cheet('f r e e m a n', function () {
  new Audio('audio/rise-and-shine.mp3').play();
});

function cortaMusica(){
  let $musica = $('audio');
  $musica[0].pause();
}
setTimeout(cortaMusica, 10000);
