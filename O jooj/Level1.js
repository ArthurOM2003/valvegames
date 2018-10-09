Jogo.Level1 = function(jogo){};

var mapa;
var camada;

var jogador;
var controles = {};
var velocidadeJogador = 250;
var timerPulo = 0;

Jogo.Level1.prototype ={
  create:function(){
    this.stage.backgroundColor = "#006600";

    this.physics.arcade.gravity.y = 1400;

    mapa = this.add.tilemap('mapaTeste',64,64);

      mapa.addTilesetImage('tiles');

    camada = mapa.createLayer(0);

      camada.resizeWorld();

      mapa.setCollisionBetween(0,0);
    
    jogador = this.add.sprite(100,560,'jogador');
    jogador.anchor.setTo(0.5,0.5);

    jogador.animations.add('para',[0,1],1,true);
    jogador.animations.add('pulo',[2],1,true);
    jogador.animations.add('corre',[3,4,5,6,7,8],7,true);

    this.physics.arcade.enable(jogador);
    this.camera.follow(jogador);
    jogador.body.collideWorldBounds = true;

    controles = {
      right: this.input.keyboard.addKey(Phaser.Keyboard.D),
      left: this.input.keyboard.addKey(Phaser.Keyboard.A),
      up: this.input.keyboard.addKey(Phaser.Keyboard.W),


    };

  },

  update:function(){
    this.physics.arcade.collide(jogador,camada);
    jogador.body.velocity.x = 0;

    if(controles.right.isDown){
      jogador.animations.play('corre');
      jogador.scale.setTo(1,1);
      jogador.body.velocity.x += velocidadeJogador;
    }

    if(controles.left.isDown){
      jogador.animations.play('corre');
      jogador.scale.setTo(-1,1);
      jogador.body.velocity.x -= velocidadeJogador;
    } 

    if(controles.up.isDown && (jogador.body.onFloor() || jogador.body.touching.down) && this.time.now > timerPulo){
      jogador.animations.play('pulo');
      jogador.body.velocity.y = -610;
      timerPulo = this.time.now + 750;
    }

    if(jogador.body.velocity.x == 0 && jogador.body.velocity.y == 0){
      jogador.animations.play('para');
    }

  },
}
