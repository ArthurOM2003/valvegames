var Jogo = {};

Jogo.Boot = function(jogo){

};

Jogo.Boot.prototype = {
  init:function(){
    this.input.maxPointers = 1;

    this.stage.disableVisibilityChange = true;
  },

  preload:function(){

    this.load.image('preloaderBar', 'coisos/teste.png');

  },

  create:function(){
    this.state.start('Preloader');
  },
}
