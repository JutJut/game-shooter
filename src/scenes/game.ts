export default class GameScene extends Phaser.Scene {
  backgrondImage: Phaser.GameObjects.Image;
  startText: Phaser.GameObjects.Text;  
  platforms;
  player;
  
  constructor() {
    super({
      key: 'Game',
    });    
  }

  preload() {     
     this.load.image('space', './assets/backgrounds/background_space_1.png');    
     this.load.image('grass', './assets/tiles/grass_tile.png');  
     this.load.spritesheet('skelly_walk', 
      './assets/skelly/skelly_idle.png',
      { frameWidth: 32, frameHeight: 48 }
    );
     this.load.spritesheet('steamman', 
      'assets/SteamMan/SteamMan.png',
      { frameWidth: 32, frameHeight: 48 }
     );
     this.load.spritesheet('steamman_walk', 
        'assets/SteamMan/SteamMan_walk.png',
        { frameWidth: 32, frameHeight: 48 }
     );   
     
  }
  
  
  create() {
    //It is important to load stuff in proper order -> for example if we load text and then image, image will go over text and hide it (some stuff could be manipulated with styles maybe ... 
    this.backgrondImage = this.add.image(0, 0, 'space').setScale(2);   
    this.platforms = this.physics.add.staticGroup();   
    this.platforms.create(50, 250, 'grass');   // first parameter is from left to right (0 to something) | second parameter is up/down | third parameter is preloaded image key     
    this.platforms.create(155, 250, 'grass'); 
    this.platforms.create(260, 250, 'grass'); 
    this.platforms.create(420, 350, 'grass'); 
    this.platforms.create(525, 350, 'grass'); 
    this.platforms.create(635, 250, 'grass'); 
    this.platforms.create(740, 250, 'grass'); 
     
    this.startText = this.add
      .text(350, 100, ['LETS GO'])      
      .setFontSize(18)
      .setFontFamily('Trebuchet MS')        
      .setColor('#00ffff')
      .setInteractive();   

      this.player = this.physics.add.sprite(250, 50, 'skelly_idle');

      this.player.setBounce(0.2);
      this.player.setCollideWorldBounds(true);
      this.player.body.setGravityY(300);
      this.anims.create({
          key: 'left',
          frames: this.anims.generateFrameNumbers('skelly_walk', { start: 0, end: 3 }),
          frameRate: 10,
          repeat: -1
      });
      
      this.anims.create({
          key: 'turn',
          frames: [ { key: 'skelly_walk', frame: 4 } ],
          frameRate: 1
      }); 
      
      this.anims.create({
          key: 'right',
          frames: this.anims.generateFrameNumbers('skelly_walk', { start: 5, end: 8 }),
          frameRate: 10,
          repeat: -1
      });                                  
                                          
      this.physics.add.collider(this.player, this.platforms);      
  }

  update() {
        // Variables
        var cursors = this.input.keyboard.createCursorKeys();       
       
        if (cursors.left.isDown)
        {
            this.player.setVelocityX(-40);      
            this.player.angularVelocityy = 1000;
            this.player.anims.play('left', true);                     
        }  
        if (cursors.right.isDown)
        {
          this.player.setVelocityX(40);    
          this.player.angularVelocityy = -1000; 
          this.player.anims.play('right', true);               
        }
        if(!cursors.left.isDown && !cursors.right.isDown)
        {
          this.player.setVelocityX(0);      
          this.player.anims.play('turn');          
        }
        if (cursors.up.isDown && this.player.body.touching.down)      
        {
          this.player.setVelocityY(-230);                                                       
        } 
        if (cursors.up.isDown && !this.player.body.touching.down) // Jump all day long
        {
          this.player.setVelocityY(-230);                       
        } 
        if (cursors.shift.isDown) // Sprint
        {              
          if(cursors.left.isDown){             
            this.player.setVelocityX(-500); 
          }
          if(cursors.right.isDown){
            this.player.setVelocityX(500); 
          }                                
        } 
  }
}
