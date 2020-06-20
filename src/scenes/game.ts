import { jumpProperties, movementKeys } from '../enums/keyboard';
import { OurScenes } from '../enums/scenes';
import { KeyboardService } from '../services/keyboard.service';
import { PlayerService } from '../services/player.service';

export default class GameScene extends Phaser.Scene {
  // characters: Characters;
  backgroundImage: Phaser.GameObjects.Image;
  startText: Phaser.GameObjects.Text;
  platforms;
  player;
  playerService: PlayerService;
  steammanIdle: Phaser.GameObjects.Sprite;
  keyboardInputs;
  didPressJump: boolean;
  keyboardService: KeyboardService;

  constructor() {
    super({
      key: OurScenes.GAME,
    });
  }

  create() {
    this.keyboardService = new KeyboardService(this.input);
    this.playerService = PlayerService.Instance;

    // IMAGES | TILES
    this.backgroundImage = this.add.image(0, 0, 'dark_forrest').setScale(2); 
    this.backgroundImage.scrollFactorX = 0;
    this.backgroundImage.scrollFactorY = 0;
    this.platforms = this.physics.add.staticGroup();

    let horizontalDistanceIndex = 0;
    for (let i = 0; i < 40; i++) {
      horizontalDistanceIndex += 105;
      this.platforms.create(horizontalDistanceIndex, 350, 'grass');
    }  

    // PLAYER AND ANIMATIONS
    this.player = this.physics.add
      .sprite(1500 / 2, 50, this.playerService.player.key)
      .setScale(this.playerService.player.body.display.scale);
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);
    this.player.body.setGravityY(300);
    this.physics.add.collider(this.player, this.platforms);   

    for (let [key, value] of Object.entries(this.playerService.player.animations)) {      
      this.anims.create({
        key: value.key,
        frames: this.anims.generateFrameNumbers(value.frames.key, {
          start: value.frames.startFrame,
          end: value.frames.endFrame,
        }),
        frameRate: value.frameRate,
        repeat: value.repeat,
      });      
    }   

    this.player.play('IDLE');
    this.keyboardInputs = this.input.keyboard.addKeys(movementKeys);
    this.cameras.main.setBounds(0,0,3500,800)
    this.cameras.main.startFollow(this.player, true, 1,1,0,+64);
    
  }
  update() {
    this.didPressJump = Phaser.Input.Keyboard.JustDown(this.keyboardInputs.W);

    if (!this.keyboardService.IfAnyKeyIsDownValidation()) {
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
    } else {
      this.player.setVelocityX(0);
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

      if (jumpProperties.JUMP_COUNTER === 2) {
        jumpProperties.CAN_JUMP = false;
      }
    }
  }
}
