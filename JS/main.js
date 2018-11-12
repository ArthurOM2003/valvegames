cheet('f r e e m a n', function () {
  new Audio('audio/rise-and-shine.mp3').play();
});

let audioZap = new Audio('audio/zap.mp3');
cheet('z a p z a p', function () {
  audioZap.play();
  setTimeout(cortaMusica2, 16000);
});

function cortaMusica2(){
  audioZap.pause();
}
