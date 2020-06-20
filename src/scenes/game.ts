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
  didPressJump;
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
    this.platforms = this.physics.add.staticGroup();

    let t = 0;
    for (let i = 0; i < 40; i++) {
      t += 105;
      this.platforms.create(t, 350, 'grass');
    }
    let v2 = 0;
    for (let i = 0; i < 40; i++) {
      v2 += 105;
      this.platforms.create(v2, 650, 'grass');
    }

    this.platforms.create(360, 270, 'grass');
    this.platforms.create(760, 270, 'grass');

    // PLAYER AND ANIMATIONS
    this.player = this.physics.add
      .sprite(1500 / 2, 50, this.playerService.player.key)
      .setScale(this.playerService.player.body.display.scale); // To add physics you need to do this.player = this.physics.add.sprite(250, 50, 'steamman_idle'); instead of this.player = this.add.sprite(250, 50, 'steamman_idle');
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);
    this.player.body.setGravityY(300);
    this.physics.add.collider(this.player, this.platforms);

    // TODO: Refactor into forLoop for each animation
    this.anims.create({
      key: this.playerService.player.animations.IDLE.key,
      frames: this.anims.generateFrameNumbers(this.playerService.player.animations.IDLE.frames.key, {
        start: this.playerService.player.animations.IDLE.frames.startFrame,
        end: this.playerService.player.animations.IDLE.frames.endFrame,
      }),
      frameRate: this.playerService.player.animations.IDLE.frameRate,
      repeat: this.playerService.player.animations.IDLE.repeat,
    });
    this.anims.create({
      key: this.playerService.player.animations.WALK.key,
      frames: this.anims.generateFrameNumbers(this.playerService.player.animations.WALK.frames.key, {
        start: this.playerService.player.animations.WALK.frames.startFrame,
        end: this.playerService.player.animations.WALK.frames.endFrame,
      }),
      frameRate: this.playerService.player.animations.WALK.frameRate,
      repeat: this.playerService.player.animations.WALK.repeat,
    });
    this.anims.create({
      key: this.playerService.player.animations.RUN.key,
      frames: this.anims.generateFrameNumbers(this.playerService.player.animations.RUN.frames.key, {
        start: this.playerService.player.animations.RUN.frames.startFrame,
        end: this.playerService.player.animations.RUN.frames.endFrame,
      }),
      frameRate: this.playerService.player.animations.RUN.frameRate,
      repeat: this.playerService.player.animations.RUN.repeat,
    });
    this.anims.create({
      key: this.playerService.player.animations.JUMP.key,
      frames: this.anims.generateFrameNumbers(this.playerService.player.animations.JUMP.frames.key, {
        start: this.playerService.player.animations.JUMP.frames.startFrame,
        end: this.playerService.player.animations.JUMP.frames.endFrame,
      }),
      frameRate: this.playerService.player.animations.JUMP.frameRate,
      repeat: this.playerService.player.animations.JUMP.repeat,
    });

    this.player.play('IDLE');
    this.keyboardInputs = this.input.keyboard.addKeys(movementKeys);
    this.cameras.main.startFollow(this.player);
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
