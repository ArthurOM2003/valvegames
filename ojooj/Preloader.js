Jogo.Preloader = function(jogo){

  this.preloadBar = null;
};

Jogo.Preloader.prototype = {
  preload:function(){

    this.preloadBar = this.add.sprite(this.world.centerX,
                                      this.world.centery,'preloaderBar');
    this.preloadBar.anchor.setTo(0.5,0.5);
    this.time.advancedTiming = true;
    this.load.setPreloadSprite(this.preloadBar);

    this.load.tilemap('mapaTeste','coisos/level1.csv');

    this.load.image('tiles','coisos/eL76q6W.png')

    this.load.image('backdrop','coisos/background.png')

    this.load.spritesheet('jogador', 'coisos/UysOegh.png',24,26);


  },

  create:function(){

    this.state.start('Level1');
  },
}
