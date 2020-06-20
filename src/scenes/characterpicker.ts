import { setPlayer, Player } from '../enums/_player';
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
        var k = 0;
        for(var i = 0; i < Object.keys(char).length; i++){
            k += 70; 
            var character = this.add.image((1500/2), k, Object.entries(char)[i][0]).setScale(1).setInteractive();
            characters.add(character);
        } 

        var entries = characters.children.entries;    
        console.log(characters.children.entries);
        characters.children.entries.forEach(function(item) {                       
            item.on('pointerdown', () => {               
                if(char.hasOwnProperty(item.texture.key)){                   
                    setPlayer(char[item.texture.key]);                    
                    this.scene.start(OurScenes.GAME);                  
                } 
                else {
                    console.log(false);
                }              
            });            
        }, this);
            
    }  
}