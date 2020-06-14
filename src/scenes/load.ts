import { OurScenes } from './_scenes';

export default class LoadScene extends Phaser.Scene {  
  startText: Phaser.GameObjects.Text;

  constructor() {
    super({
      key: OurScenes.LOAD,
    });
  }

  preload() {

    //Assets to preload
    // this.load.image('space', './assets/backgrounds/background_space_1.png');

    console.log('load'); 
    console.log(this.game.renderer.width, this.game.renderer.height);
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;
    
    const loadingBar = this.add.graphics({
      fillStyle: {
        color: 0xff0000
      },
      x: this.game.renderer.width / 3,
      y: this.game.renderer.height / 3,
    });

    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff'
      }
    });
    loadingText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
          font: '18px monospace',
          fill: '#ffffff'
      }
    });
    assetText.setOrigin(0.5, 0.5);

    for (let index = 0; index < 100; index++) {
      this.load.image('space'+index, './assets/backgrounds/background_space_1.png');
      console.log(index);
    }

    this.load.on('progress', (percentage) => {
      loadingBar.fillRect(0, this.game.renderer.width / 2, this.game.renderer.width * percentage, 30);
    });

    this.load.on('fileprogress', (file) => {
      // console.log("progress", file)
      assetText.setText('Loading asset: ' + file.key);
    });

    this.load.on('complete', (done)=>{
      console.log("completed", done)
      assetText.setText('Loading Complete!');
    })
  }
  create(){
    // this.scene.start(OurScenes.MENU)
  }
}
