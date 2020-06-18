import { Player } from '../enums/_player';
import { OurScenes } from '../enums/_scenes';
import { Characters } from '../enums/characterConfigurations';

export default class CharacterPickerScene extends Phaser.Scene {
    backgroundImage: Phaser.GameObjects.Image; 
     characters: Characters;

    constructor() {
        super({
          key: OurScenes.CHARACTER_PICKER,      
        });
        this.characters = new Characters();
      }    

    create(){
     
        var char = this.characters.CharactersConfigurations;
        this.add.image(0, 0, 'dark_forrest').setScale(1.7);
        const characters = this.physics.add.staticGroup();
        const robo = this.add.image((1500 / 2) , 50, 'robo_idle').setScale(0.3).setInteractive();
        const steamman = this.add.image((1500 / 2) , 100, 'steamman_idle').setScale(1).setInteractive();
        const bandit = this.add.image((1500 / 2) , 100, 'bandit_idle').setScale(1).setInteractive();

        characters.add(robo); characters.add(steamman); characters.add(bandit);

        characters.children.entries.forEach(function(item) {            
            item.on('pointerdown', () => {
                if('key' in char === item.texture.key){
                    // Player = char;
                    console.log(true);
                }
                                                   
                // this.scene.start(OurScenes.GAME);
            });            
        }, this);
            
    }  
}