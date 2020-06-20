import {
    jumpProperties,
    movementKeys,
} from '../enums/_keyboard';
import { Player } from '../enums/_player';
import { OurScenes } from '../enums/_scenes';
import { KeyboardServices } from '../services/keyboardServices';
import { Characters } from '../enums/characterConfigurations';

export default class GameScene extends Phaser.Scene {
  characters: Characters;
  backgroundImage: Phaser.GameObjects.Image;
  startText: Phaser.GameObjects.Text;
  platforms;
  player;
  steammanIdle: Phaser.GameObjects.Sprite;
  keyboardInputs;
  didPressJump;  
  keyboardServices: any;

  constructor() {
    super({
      key: OurScenes.GAME,      
    });
    this.characters = new Characters();
  }

  create() {
    console.log(Player);
    this.keyboardServices = new KeyboardServices(this.input);
    var characters = this.characters.CharactersConfigurations;

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

    // PLAYER AND ANIMATIONS
    this.player = this.physics.add.sprite((1500 / 2) , 50, Player.key).setScale(Player.body.display.scale); // To add physics you need to do this.player = this.physics.add.sprite(250, 50, 'steamman_idle'); instead of this.player = this.add.sprite(250, 50, 'steamman_idle');
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);
    this.player.body.setGravityY(300);
    this.physics.add.collider(this.player, this.platforms);       

    this.anims.create({
      key: Player.animations.IDLE.key,
      frames: this.anims.generateFrameNumbers(Player.animations.IDLE.frames.key, { start: Player.animations.IDLE.frames.startFrame, end: Player.animations.IDLE.frames.endFrame }),
      frameRate: Player.animations.IDLE.frameRate,
      repeat: Player.animations.IDLE.repeat,
    });   
    this.anims.create({
      key: Player.animations.WALK.key,
      frames: this.anims.generateFrameNumbers(Player.animations.WALK.frames.key, { start: Player.animations.WALK.frames.startFrame, end: Player.animations.WALK.frames.endFrame }),
      frameRate: Player.animations.WALK.frameRate,
      repeat: Player.animations.WALK.repeat,
    });   
    this.anims.create({
      key: Player.animations.RUN.key,
      frames: this.anims.generateFrameNumbers(Player.animations.RUN.frames.key, { start: Player.animations.RUN.frames.startFrame, end: Player.animations.RUN.frames.endFrame }),
      frameRate: Player.animations.RUN.frameRate,
      repeat: Player.animations.RUN.repeat,
    });   
    this.anims.create({
      key: Player.animations.JUMP.key,
      frames: this.anims.generateFrameNumbers(Player.animations.JUMP.frames.key, { start: Player.animations.JUMP.frames.startFrame, end: Player.animations.JUMP.frames.endFrame }),
      frameRate: Player.animations.JUMP.frameRate,
      repeat: Player.animations.JUMP.repeat,
    });   
    
    
    //Defaults when player is not moving
    this.player.play('IDLE');
    this.keyboardInputs = this.input.keyboard.addKeys(movementKeys);   

    this.cameras.main.startFollow(this.player); 
    
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
      this.player.flipX = false;
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
      this.player.setVelocityY(-350);
      jumpProperties.JUMP_COUNTER++;
      if (jumpProperties.JUMP_COUNTER == 2) {
        jumpProperties.CAN_JUMP = false;
      }
    }                                                                                                          
                
  }
  
}
