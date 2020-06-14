import { OurScenes } from './_scenes';

export default class MenuScene extends Phaser.Scene {
  backgroundImage: Phaser.GameObjects.Image;
  startText: Phaser.GameObjects.Text;
  startButton;

  constructor() {
    super({
      key: OurScenes.MENU,
    });
  }

  create() {
    this.startButton = this.add.text(100, 100, 'Start the game', { fill: '#0f0' }).setInteractive();
    this.startButton.on('pointerdown', () => {
      console.log('pointerover');
    });
  }
}
