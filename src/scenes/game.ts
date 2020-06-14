import { OurScenes } from './_scenes';

export default class GameScene extends Phaser.Scene {
  backgroundImage: Phaser.GameObjects.Image;
  startText: Phaser.GameObjects.Text;
  platforms;
  player;
  steammanIdle: Phaser.GameObjects.Sprite;

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
    this.player = this.add.sprite(250, 50, 'steamman_idle');
    // this.player.add.physics
    // this.player.setBounce(0.2);
    // this.player.setCollideWorldBounds(true);
    // this.player.body.setGravityY(300);

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

    this.player.play('IDLE');
    // this.physics.add.collider(this.player, this.platforms);
  }

  update() {
    const cursors = this.input.keyboard.createCursorKeys();

    if (cursors.up.isDown) {
      this.player.anims.play('RUN', true);
    } else if (cursors.right.isDown) {
      this.player.flipX = false;
      this.player.anims.play('WALK', true);
    } else if (cursors.left.isDown) {
      this.player.flipX = true;
      this.player.anims.play('WALK', true);
    } else {
      this.player.anims.play('IDLE', true);
    }
  }
}
