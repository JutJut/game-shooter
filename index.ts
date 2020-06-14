import Phaser from 'phaser';

import GameScene from './src/scenes/game';
import LoadScene from './src/scenes/load';

const config = {
  type: Phaser.AUTO,
  width: screen.width,
  height: screen.height,
  scene: [LoadScene, GameScene],
  backgroundColor: '#2d2d2d',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
};

var game = new Phaser.Game(config);
