import {
    jumpProperties,
    movementKeys,
} from '../enums/_keyboard';
import { OurScenes } from '../enums/_scenes';
import { KeyboardServices } from '../services/keyboardServices';

export default class GameScene extends Phaser.Scene {
  backgroundImage: Phaser.GameObjects.Image;
  startText: Phaser.GameObjects.Text;
  platforms;
  player;
  player2;
  steammanIdle: Phaser.GameObjects.Sprite;
  keyboardInputs;
  didPressJump;
  onTheGround;  
  canFlash;
  canFlashTimeout;
  flashProgress;
  graphics: Phaser.GameObjects.Graphics;
  newGraphics: Phaser.GameObjects.Graphics;
  progressBar;
  progressBarFill;
  progressBarFillWidth;
  keyboardServices: any;

  constructor() {
    super({
      key: OurScenes.GAME,      
    });
  }

  create() {

    // this.matter.world = new World();

    this.keyboardServices = new KeyboardServices(this.input);
    // IMAGES | TILES
    this.backgroundImage = this.add.image(0, 0, 'dark_forrest').setScale(2);
    this.platforms = this.physics.add.staticGroup();   

    var t = 0;    
    for(var i = 0; i <40; i++){
      t += 105;
      this.platforms.create(t, 350, 'grass');
    }
    var v2 = 0;
    for(var i = 0; i < 40; i++){
      v2 += 105;
      this.platforms.create(v2, 650, 'grass');
    }

    this.platforms.create(360, 270, 'grass');
    this.platforms.create(760, 270, 'grass');

    this.platforms.create(1200, 400, 'grass');
    this.platforms.create(1700, 400, 'grass');

    
    // PLAYER AND ANIMATIONS
    this.player = this.physics.add.sprite((1500 / 2) , 50, 'robo_idle').setScale(0.3); // To add physics you need to do this.player = this.physics.add.sprite(250, 50, 'steamman_idle'); instead of this.player = this.add.sprite(250, 50, 'steamman_idle');
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);
    this.player.body.setGravityY(300);
    this.physics.add.collider(this.player, this.platforms);

    this.player2 = this.physics.add.sprite(250 , 50, 'steamman_idle');
    this.player2.setBounce(0.35);
    this.player2.setCollideWorldBounds(true);
    this.player2.body.setGravityY(300);
    this.physics.add.collider(this.player2, this.platforms);

    this.physics.add.collider(this.player2, this.player);

    this.anims.create({
      key: 'IDLE',
      frames: this.anims.generateFrameNumbers('robo_idle', { start: 0, end: 20 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: 'WALK',
      frames: this.anims.generateFrameNumbers('robo_walk', { start: 0, end: 28 }),
      frameRate: 100,
      repeat: -1,
    });
    this.anims.create({
      key: 'RUN',
      frames: this.anims.generateFrameNumbers('robo_walk', { start: 0, end: 28 }),
      frameRate: 200,
      repeat: -1,
    });
    this.anims.create({
      key: 'JUMP',
      frames: this.anims.generateFrameNumbers('robo_idle', { start: 0, end: 19 }),
      frameRate: 10,
      repeat: -1,
    });
    //Defaults when player is not moving
    this.player.play('IDLE');
    this.keyboardInputs = this.input.keyboard.addKeys(movementKeys);

    //Other necessary logic
    // this.onTheGround = this.player.body.touching.down;
    // this.canFlash = true;
    // this.canFlashTimeout = 5000;

    this.cameras.main.startFollow(this.player);


    this.graphics = this.add.graphics();
    this.newGraphics = this.add.graphics();
    this.progressBar = new Phaser.Geom.Rectangle(this.player.x-60, this.player.y+270, 100, 10);
    this.progressBarFillWidth = 0;
    this.progressBarFill = new Phaser.Geom.Rectangle(this.player.x-60, this.player.y+270, this.progressBarFillWidth, 10);   
    
  }
  update() {
    this.didPressJump = Phaser.Input.Keyboard.JustDown(this.keyboardInputs.W);
    
    if (!this.keyboardServices.IfAnyKeyIsDownValidation()) {
      this.player.anims.play('IDLE', true);
    }

    if (this.player.body.touching.down) {
      jumpProperties.JUMP_COUNTER = 0;
      jumpProperties.CAN_JUMP = true;
    }
    
    if (this.keyboardInputs.D.isDown) {
      this.player.flipX = true;
      if (this.keyboardInputs.SHIFT.isDown) {
        this.player.anims.play('RUN', true);
        this.player.setVelocityX(160);
      } else {
        this.player.anims.play('WALK', true);
        this.player.setVelocityX(120);
      }
    } 
    else {
      this.player.setVelocityX(0); //Idk why the fuck this works the way it works
    }

    if (this.keyboardInputs.A.isDown) {
      this.player.flipX = false;
      if (this.keyboardInputs.SHIFT.isDown) {
        this.player.anims.play('RUN', true);
        this.player.setVelocityX(-160);
      } else {
        this.player.anims.play('WALK', true);
        this.player.setVelocityX(-120);
      }
    }

    if (this.didPressJump && jumpProperties.CAN_JUMP) {
      this.player.anims.play('JUMP', true);
      this.player.setVelocityY(-350);
      jumpProperties.JUMP_COUNTER++;
      if (jumpProperties.JUMP_COUNTER == 2) {
        jumpProperties.CAN_JUMP = false;
      }
    }

    // if(this.keyboardInputs.SPACE.isDown){
      // this.graphics.x = this.player.x-250;
      // this.newGraphics.x = this.player.x-250;
      // this.graphics.y = this.player.y-280;
      // this.newGraphics.y = this.player.y-280;      
      
      // var i = 0;     
               
      // this.progressBarFillWidth = 1;        
        // setInterval(()=>{
          // if (this.progressBarFillWidth >= 100) {    
            // this.progressBarFillWidth = 1;        
            // i = 0;
          // } else {       
            // this.progressBarFillWidth++;     
            // this.progressBarFill.width = this.progressBarFillWidth;            
          // }
        // }, 1);
        // this.graphics.fillStyle(0xffffff, 1);
        // this.graphics.fillRectShape(this.progressBar);
        // this.newGraphics.fillStyle(0x3587e2, 1);
        // this.newGraphics.fillRectShape(this.progressBarFill);       
    // }
    // // console.log(this.progressBarFill.width);
    // if(this.progressBarFill.width >= 100 && Phaser.Input.Keyboard.JustUp(this.keyboardInputs.SPACE)){
      // console.log('yeah', this.progressBarFill.width  );
      // this.player.setVelocityX(-20000);      
    // }

    // if(this.keyboardInputs.SPACE.isUp){
      // this.graphics.clear();
      // this.newGraphics.clear();
    // }

    // if (this.keyboardInputs.A.isDown && Phaser.Input.Keyboard.JustDown(this.keyboardInputs.S) && this.canFlash) {       
      // this.player.setVelocityX(-20000);
      // this.canFlash = false;
      // setTimeout(() => {
        // this.canFlash = true;
      // }, this.canFlashTimeout); 
      // console.log(this.canFlashTimeout);    
    // }
  }
  
}
