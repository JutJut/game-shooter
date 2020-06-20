import { OurScenes } from '../enums/_scenes';

export class Characters extends Phaser.Scene {

    constructor(){
        super({
             key: OurScenes.CHARACTERS,  
        });
    }
    
      

     CharactersConfigurations = {        
        'steam_man': {
            key: 'steam_man',
            body:{
                display:{
                    frameWidth: 48,
                    frameHeight: 48,
                    scale: 1
                },
                health: 100,                
            },
            animations: {
                SPAWN: {
                    key: 'SPAWN',                 
                    frames:{
                        key: 'steamman_idle',
                        startFrame: 0,
                        endFrame: 5,
                    }, 
                    frameRate: 10,
                    repeat: -1
                },
                IDLE: {
                    key: 'IDLE',
                    frames: {
                        key: 'steamman_idle',
                        startFrame: 0,
                        endFrame: 5,
                    }, 
                    frameRate: 10,
                    repeat: -1
                },
                WALK: {
                    key: 'WALK',
                    frames:{
                        key: 'steamman_walk',
                        startFrame: 0,
                        endFrame: 5,
                    }, 
                    frameRate: 100,
                    repeat: -1
                },
                RUN: {
                    key: 'RUN',
                    frames:{
                        key: 'steamman_run',
                        startFrame: 0,
                        endFrame: 5,
                    }, 
                    frameRate: 200,
                    repeat: -1
                },
                JUMP: {
                    key: 'JUMP',
                    frames:{
                        key: 'steamman_idle',
                        startFrame: 0,
                        endFrame: 5,
                    }, 
                    frameRate: 10,
                    repeat: -1
                }
            },
            spriteSheets:{     
                SPAWN: {
                    key:'steam_man',
                    path:'./assets/SteamMan/SteamMan.png'
                },           
                IDLE: {
                    key:'steamman_idle',
                    path:'./assets/SteamMan/SteamMan_idle.png'
                },
                WALK: {
                    key:'steamman_walk',
                    path:'./assets/SteamMan/SteamMan_walk.png'
                },
                RUN: {
                    key:'steamman_run',
                    path:'./assets/SteamMan/SteamMan_run.png'
                },
                JUMP: {
                    key:'steamman_jump',
                    path:'./assets/SteamMan/SteamMan_jump.png'
                }
            },
            audioAssets:{
    
            }
        },
    }
        
}
