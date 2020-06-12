export default class Game extends Phaser.Scene {
  startText: Phaser.GameObjects.Text;

  constructor() {
    super({
      key: 'Game',
    });
  }

  preload() {
    // this.load.image('cyanCardFront', 'src/assets/CyanCardFront.png');
    // this.load.image('cyanCardBack', 'src/assets/CyanCardBack.png');
    // this.load.image('magentaCardFront', 'src/assets/MagentaCardFront.png');
    // this.load.image('magentaCardBack', 'src/assets/MagentaCardBack.png');
  }

  create() {
    this.startText = this.add
      .text(75, 350, ['LETS GO'])
      .setFontSize(18)
      .setFontFamily('Trebuchet MS')
      .setColor('#00ffff')
      .setInteractive();
  }

  update() {}
}
