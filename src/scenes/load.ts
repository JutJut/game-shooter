import { OurScenes } from '../enums/_scenes';

export default class LoadScene extends Phaser.Scene {
  startText: Phaser.GameObjects.Text;
  graphics: Phaser.GameObjects.Graphics;
  newGraphics: Phaser.GameObjects.Graphics;

  constructor() {
    super({
      key: OurScenes.LOAD,
    });
  }

  updateBar(percentage) {
    console.log('P:' + percentage);
  }

  complete() {
    console.log('COMPLETE!');
  }

  preload() {
    // Preload Assets
    this.load.image('space', './assets/backgrounds/background_space_1.png');
    this.load.image('grass', './assets/tiles/grass_tile.png');

    this.load.spritesheet('steamman_idle', 'assets/SteamMan/SteamMan_idle.png', { frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('steamman_walk', 'assets/SteamMan/SteamMan_walk.png', { frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('steamman_run', 'assets/SteamMan/SteamMan_run.png', { frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('steamman_jump', 'assets/SteamMan/SteamMan_jump.png', { frameWidth: 48, frameHeight: 48 });

    // LoadingBar
    const graphics = this.add.graphics();
    const newGraphics = this.add.graphics();
    const progressBar = new Phaser.Geom.Rectangle(200, 200, 400, 50);
    const progressBarFill = new Phaser.Geom.Rectangle(205, 205, 290, 40);

    graphics.fillStyle(0xffffff, 1);
    graphics.fillRectShape(progressBar);

    newGraphics.fillStyle(0x3587e2, 1);
    newGraphics.fillRectShape(progressBarFill);

    const loadingText = this.add.text(250, 260, 'Loading: ', { fontSize: '32px', fill: '#FFF' });

    this.load.on('progress', (percentage) => {
      newGraphics.clear();
      newGraphics.fillStyle(0x3587e2, 1);
      newGraphics.fillRectShape(new Phaser.Geom.Rectangle(205, 205, percentage * 390, 40));

      loadingText.setText('Loading: ' + (percentage * 100).toFixed(2) + '%');
    });

    this.load.on('complete', () => {
      this.scene.start(OurScenes.GAME);
    });
  }
}
