import { OurScenes } from '../enums/_scenes';
import { movementKeys, jumpProperties } from '../enums/_keyboard';

export default class GameScene extends Phaser.Scene {
  backgroundImage: Phaser.GameObjects.Image;
  startText: Phaser.GameObjects.Text;
  platforms;
  player;
  steammanIdle: Phaser.GameObjects.Sprite;
  keyboardInputs; 
  didPressJump; 
  onTheGround;

  constructor() {
    super({
      key: OurScenes.GAME,
    });
  }

  create() {

    // IMAGES | TILES
    this.backgroundImage = this.add.image(0, 0, 'space').setScale(2);
    this.backgroundImage = this.add.image(1200, 0, 'space').setScale(2);
    this.backgroundImage = this.add.image(2400, 0, 'space').setScale(2);
    this.backgroundImage = this.add.image(0, 1199, 'space').setScale(2).setRotation(9.425);
    this.backgroundImage = this.add.image(1200, 1199, 'space').setScale(2).setRotation(9.425);
    this.backgroundImage = this.add.image(2400, 1199, 'space').setScale(2).setRotation(9.425);

    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(50, 250, 'grass');
    this.platforms.create(155, 250, 'grass');
    this.platforms.create(260, 250, 'grass');
    this.platforms.create(420, 350, 'grass');
    this.platforms.create(525, 350, 'grass');
    this.platforms.create(635, 250, 'grass');
    this.platforms.create(740, 250, 'grass');

    // PLAYER AND ANIMATIONS
    this.player = this.physics.add.sprite(250, 50, 'steamman_idle'); // To add physics you need to do this.player = this.physics.add.sprite(250, 50, 'steamman_idle'); instead of this.player = this.add.sprite(250, 50, 'steamman_idle');
    // this.player.setBounce(1);
    this.player.setCollideWorldBounds(true);
    this.player.body.setGravityY(300);
    this.physics.add.collider(this.player, this.platforms);

    this.anims.create({
      key: 'IDLE',
      frames: this.anims.generateFrameNumbers('steamman_idle', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: 'WALK',
      frames: this.anims.generateFrameNumbers('steamman_walk', { start: 0, end: 5 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: 'RUN',
      frames: this.anims.generateFrameNumbers('steamman_run', { start: 0, end: 5 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: 'JUMP',
      frames: this.anims.generateFrameNumbers('steamman_jump', { start: 0, end: 5 }),
      frameRate: 10,
      repeat: -1,
    });
    //Defaults when player is not moving
    this.player.play('IDLE');    
    this.keyboardInputs = this.input.keyboard.addKeys(movementKeys);  

    //Other necessary logic
    this.onTheGround = this.player.body.touching.down;  
   
  }

  update() {   
    this.didPressJump = Phaser.Input.Keyboard.JustDown(this.keyboardInputs.W);   
    
    if(this.player.body.touching.down){
      jumpProperties.JUMP_COUNTER = 0;
      jumpProperties.CAN_JUMP = true;    
    }
    
    if(Math.abs(this.player.body.velocity.x) < 1 && Math.abs(this.player.body.velocity.y) < 1) {
      this.player.anims.play('IDLE', true);        
    }

    if (this.keyboardInputs.D.isDown) {
      this.player.flipX = false;
      if (this.keyboardInputs.SHIFT.isDown) {
        this.player.anims.play('RUN', true);
        this.player.setVelocityX(160);
      } else {
        this.player.anims.play('WALK', true);
        this.player.setVelocityX(120);
      }
    }
    else{
      this.player.setVelocityX(0); //Idk why the fuck this works the way it works
    }

    if (this.keyboardInputs.A.isDown) {
      this.player.flipX = true;
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
      if (this.keyboardInputs.SHIFT.isDown) {
        this.player.anims.play('RUN', true);
        this.player.setVelocityX(-160);
        jumpProperties.JUMP_COUNTER++;
        this.player.setVelocityY(-350);
        if(jumpProperties.JUMP_COUNTER == 2){
          jumpProperties.CAN_JUMP = false         
        }         
      }        

    }       

  }
}