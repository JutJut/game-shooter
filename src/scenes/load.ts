import { availableCharacters } from '../config/characterConfig';
import { pickupAssets } from '../config/pickupAssetsConfig';
import { OurScenes } from '../enums/scenes';

export default class LoadScene extends Phaser.Scene {
  startText: Phaser.GameObjects.Text;
  graphics: Phaser.GameObjects.Graphics;
  newGraphics: Phaser.GameObjects.Graphics;
  backgroundImage;

  constructor() {
    super({
      key: OurScenes.LOAD,
    });
  } 

  preload() {
    const characters = availableCharacters;  
    const _pickupAssets = pickupAssets;

    // Game images and tiles
    this.backgroundImage = this.load.image('dark_forrest', './assets/backgrounds/background_darkforrest.jpg');     
    this.load.spritesheet('grass', './assets/tiles/grass_tile.png', { frameWidth: 100, frameHeight: 70 });

    // Game characters
    characters.forEach((characterConfig) => {     
      for (let [key, value] of Object.entries(characterConfig.spriteSheets)) {
        this.load.spritesheet(value.key, value.path, {
          frameWidth: characterConfig.body.display.frameWidth,
          frameHeight: characterConfig.body.display.frameHeight,
        });
      }      
     });

    _pickupAssets.forEach((pickupAssetConfig) => {
      this.load.spritesheet(pickupAssetConfig.key, pickupAssetConfig.path, {
        frameWidth: pickupAssetConfig.display.frameWidth,
        frameHeight: pickupAssetConfig.display.frameHeight,
      });
    });

    // Menu assets
    this.load.image('button_start', './assets/Menu/Large-Buttons/Large-Buttons/PlayButton.png');
    this.load.image('button_settings', './assets/Menu/Large-Buttons/Large-Buttons/SettingsButton.png');
    this.load.image('button_continue', './assets/Menu/Large-Buttons/Large-Buttons/ContinueButton.png');
    this.load.image('button_audio', './assets/Menu/Square-Buttons/Square-Buttons/AudioSquareButton.png');

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
      this.scene.start(OurScenes.START_MENU);
    });
  }
}
