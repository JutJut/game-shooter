import { Player } from '../enums/_player';
import { OurScenes } from '../enums/_scenes';

export default class CharacterPickerScene extends Phaser.Scene {
    backgroundImage: Phaser.GameObjects.Image; 
    character;

    constructor() {
        super({
          key: OurScenes.CHARACTER_PICKER,      
        });
      }    

    create(){
     
        this.add.image(0, 0, 'dark_forrest').setScale(1.7);
        const characters = this.physics.add.staticGroup();
        const robo = this.add.image((1500 / 2) , 50, 'robo_idle').setScale(0.3).setInteractive();
        const steamman = this.add.image((1500 / 2) , 100, 'steamman_idle').setScale(1).setInteractive();

        characters.add(robo); characters.add(steamman); 

        characters.children.entries.forEach(function(item) {            
            item.on('pointerdown', () => {
                Player.ID = item.texture.key; 
                console.log(Player.ID);                    
                this.scene.start(OurScenes.GAME);
            });            
        }, this);
            
    }  
}