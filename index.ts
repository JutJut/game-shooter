import Phaser from 'phaser';

import CharacterPickerScene from './src/scenes/characterpicker';
import GameScene from './src/scenes/game';
import LoadScene from './src/scenes/load';
import StartMenuScene from './src/scenes/menu';

const config = {
  type: Phaser.AUTO,
  scale: {
    // width: 1500,
    // height: 800,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  }, 
  scene: [LoadScene, StartMenuScene, GameScene, CharacterPickerScene],
  backgroundColor: '#2d2d2d',
  physics: {
    default: 'arcade',
    arcade: {
      x: 0,
      y: 0,     
      width: 3500,
      height:800,
      gravity: { y: 300 },
      debug: false,
      fps: 60,
      checkCollision: {
        up: true,
        down: true,
        left: true,
        right: true,
      },
      timeScale: 1,
    },
  },
};

const game = new Phaser.Game(config);
