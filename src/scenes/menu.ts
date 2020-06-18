import { OurScenes } from '../enums/_scenes';

export default class StartMenuScene extends Phaser.Scene {
  backgroundImage: Phaser.GameObjects.Image;
  startText: Phaser.GameObjects.Text;  

  constructor() {
    super({
      key: OurScenes.MENU,
    });
  }

  create() {
    //images
    this.add.image(0, 0, 'dark_forrest').setScale(1.7);

    // this.startButton = this.add.text(this.game.config.width / 2.3, this.game.config.height / 2, 'Start the game', { fill: '#0f0' }).setInteractive();
    const startButton = this.add.image(this.game.config.width / 2.1, this.game.config.height / 2.3, 'button_start').setInteractive().setScale(0.4);
    const settingsButton = this.add.image(this.game.config.width / 2.1, this.game.config.height / 1.7, 'button_settings').setInteractive().setScale(0.4);
    const audio = this.add.image(this.game.config.width / 15, this.game.config.height / 10, 'button_audio').setInteractive().setScale(0.4);
   
    startButton.on('pointerdown', () => {
      this.scene.start(OurScenes.CHARACTER_PICKER);      
    });
  }  
  
}







