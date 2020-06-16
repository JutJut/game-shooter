import Phaser from 'phaser';

import GameScene from './src/scenes/game';
import LoadScene from './src/scenes/load';

const config = {
  type: Phaser.AUTO,
  width: 1500,
  height: 1000,
  scene: [LoadScene, GameScene],
  backgroundColor: '#2d2d2d',
  physics: {
    default: 'arcade',
    arcade: {
      x: 0,
      y: 0,
      // width: this.scene.sys.scale.width,
      // height: this.scene.sys.scale.height,
      gravity: { y: 300 },
      debug: false,
      fps: 60,
      checkCollision: {
        up: true,
        down: true,
        left: true,
        right: true
      },
      timeScale: 0.6, 
    },
  },
};

var game = new Phaser.Game(config);
