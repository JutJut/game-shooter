import { OurScenes } from '../enums/_scenes';
import { Characters } from '../enums/characterConfigurations';

export default class LoadScene extends Phaser.Scene {
  startText: Phaser.GameObjects.Text;
  graphics: Phaser.GameObjects.Graphics;  
  newGraphics: Phaser.GameObjects.Graphics;
  charactersConfiguration: Characters;

  constructor() {
    super({
      key: OurScenes.LOAD,                  
    });
    this.charactersConfiguration = new Characters();
  }

  updateBar(percentage) {
    console.log('P:' + percentage);
  }

  complete() {
    console.log('COMPLETE!');    
  }

  preload() {   
    
    var characters = this.charactersConfiguration.CharactersConfigurations;
    
    this.game.config.physics.arcade.width = this.scene.systems.scale.width;
    this.game.config.physics.arcade.height = this.scene.systems.scale.height;

    // Preload Assets

    // Game images and tiles
    this.load.image('dark_forrest', './assets/backgrounds/background_darkforrest.jpg');
    this.load.spritesheet('grass', './assets/tiles/grass_tile.png', { frameWidth: 100, frameHeight: 70 });

    // Game characters
    this.load.spritesheet(characters.steam_man.spriteSheets.SPAWN.key, characters.steam_man.spriteSheets.SPAWN.path, { frameWidth: characters.steam_man.body.display.frameWidth, frameHeight: characters.steam_man.body.display.frameHeight });
    this.load.spritesheet(characters.steam_man.spriteSheets.IDLE.key, characters.steam_man.spriteSheets.IDLE.path, { frameWidth: characters.steam_man.body.display.frameWidth, frameHeight: characters.steam_man.body.display.frameHeight });
    this.load.spritesheet(characters.steam_man.spriteSheets.WALK.key, characters.steam_man.spriteSheets.WALK.path, { frameWidth: characters.steam_man.body.display.frameWidth, frameHeight: characters.steam_man.body.display.frameHeight });
    this.load.spritesheet(characters.steam_man.spriteSheets.RUN.key, characters.steam_man.spriteSheets.RUN.path, { frameWidth: characters.steam_man.body.display.frameWidth, frameHeight: characters.steam_man.body.display.frameHeight });
    this.load.spritesheet(characters.steam_man.spriteSheets.JUMP.key, characters.steam_man.spriteSheets.JUMP.path, { frameWidth: characters.steam_man.body.display.frameWidth, frameHeight: characters.steam_man.body.display.frameHeight });

    this.load.spritesheet(characters.robot.spriteSheets.SPAWN.key, characters.robot.spriteSheets.SPAWN.path, { frameWidth: characters.robot.body.display.frameWidth, frameHeight: characters.robot.body.display.frameHeight });
    this.load.spritesheet(characters.robot.spriteSheets.IDLE.key, characters.robot.spriteSheets.IDLE.path, { frameWidth: characters.robot.body.display.frameWidth, frameHeight: characters.robot.body.display.frameHeight }); 
    this.load.spritesheet(characters.robot.spriteSheets.WALK.key, characters.robot.spriteSheets.WALK.path, { frameWidth: characters.robot.body.display.frameWidth, frameHeight: characters.robot.body.display.frameHeight });

    this.load.spritesheet(characters.bandit_green.spriteSheets.SPAWN.key, characters.bandit_green.spriteSheets.SPAWN.path, { frameWidth: characters.bandit_green.body.display.frameWidth, frameHeight: characters.bandit_green.body.display.frameHeight });
    this.load.spritesheet(characters.bandit_green.spriteSheets.IDLE.key, characters.steam_man.spriteSheets.IDLE.path, { frameWidth: characters.bandit_green.body.display.frameWidth, frameHeight: characters.bandit_green.body.display.frameHeight });
    this.load.spritesheet(characters.bandit_green.spriteSheets.WALK.key, characters.bandit_green.spriteSheets.WALK.path, { frameWidth: characters.bandit_green.body.display.frameWidth, frameHeight: characters.bandit_green.body.display.frameHeight });
    this.load.spritesheet(characters.bandit_green.spriteSheets.RUN.key, characters.bandit_green.spriteSheets.RUN.path, { frameWidth: characters.bandit_green.body.display.frameWidth, frameHeight: characters.bandit_green.body.display.frameHeight });
    this.load.spritesheet(characters.bandit_green.spriteSheets.JUMP.key, characters.bandit_green.spriteSheets.JUMP.path, { frameWidth: characters.bandit_green.body.display.frameWidth, frameHeight: characters.bandit_green.body.display.frameHeight });

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
