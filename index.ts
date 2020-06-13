import Phaser from 'phaser';
import GameScene from './src/scenes/game';

const config = {
  type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [GameScene],
    backgroundColor: '#2d2d2d',
    physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 300 },
          debug: false
      }
  }
}
var game = new Phaser.Game(config);

function preload ()
{       
}

function create ()
{    
}

function update ()
{
}