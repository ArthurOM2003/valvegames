function cortaMusica(){
  let $musica = $('audio');
  $musica[0].pause();
}
setTimeout(cortaMusica, 9500);

let audioplant = new Audio('audio/planted.mp3');
cheet('p l a n t', function () {
  audioplant.play();
});
let audiodefuse = new Audio('audio/defused.mp3');
cheet('d e f u s e', function () {
  audiodefuse.play();
});
