import { OurScenes } from '../enums/_scenes';

export default class Characters extends Phaser.Scene {
   
    
    constructor() {
        super({
          key: OurScenes.CHARACTERS,      
        });
      }
    
    
    GetCharacterByKey(key){
        var a = this.anims.generateFrameNumbers('robo_idle', { start: 0, end: 59 }):
        console.log(a);
        switch(key){
            case 'robo_idle':
                return {
                    Id: key,
                    animations:{
                        Idle: {
                            key: 'IDLE',
                            frames: this.anims.generateFrameNumbers('robo_idle', { start: 0, end: 59 }),
                            frameRate: 10,
                            repeat: -1,
                        },   
                        Walk: {
                            key: 'WALK',
                            frames: this.anims.generateFrameNumbers('robo_walk', { start: 0, end: 28 }),
                            frameRate: 100,
                            repeat: -1,
                        }, 
                        Run: {
                            key: 'RUN',
                            frames: this.anims.generateFrameNumbers('robo_walk', { start: 0, end: 20 }),
                            frameRate: 200,
                            repeat: -1,
                        },     
                        Jump: {
                            key: 'JUMP',
                            frames: this.anims.generateFrameNumbers('robo_idle', { start: 0, end: 20 }),
                            frameRate: 10,
                            repeat: -1,
                        },   
                    },                    
                }
                break;
            
            case 'steamman_idle':
                return 'steamman';
                break;
        } 
    }
}