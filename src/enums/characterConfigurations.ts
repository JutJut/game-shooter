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
        'robot': {
            key: 'robot',
            body:{
                display:{
                    frameWidth: 137,
                    frameHeight: 140,
                    scale:0.3
                },
                health: 100,                
            },
            animations: {
                SPAWN:{
                    key: 'SPAWN',
                    frames:{
                        key: 'robo_idle',
                        startFrame: 0,
                        endFrame: 28,
                    }, 
                    frameRate: 10,
                    repeat: -1
                },
                IDLE: {
                    key: 'IDLE',
                    frames:{
                        key: 'robo_idle',
                        startFrame: 0,
                        endFrame: 28,
                    }, 
                    frameRate: 10,
                    repeat: -1
                },
                WALK: {
                    key: 'WALK',
                    frames:{
                        key: 'robo_walk',
                        startFrame: 0,
                        endFrame: 28,
                    }, 
                    frameRate: 100,
                    repeat: -1
                },
                RUN: {
                    key: 'RUN',
                    frames:{
                        key: 'robo_walk',
                        startFrame: 0,
                        endFrame: 28,
                    }, 
                    frameRate: 200,
                    repeat: -1
                },
                JUMP: {
                    key: 'JUMP',
                    frames:{
                        key: 'robo_idle',
                        startFrame: 0,
                        endFrame: 28,
                    },
                    frameRate: 10,
                    repeat: -1
                }
            },
            spriteSheets:{
                SPAWN: {
                    key:'robot',
                    path:'./assets/robo/robo_idle.png'
                },
                IDLE: {
                    key:'robo_idle',
                    path:'./assets/robo/robo_idle.png'
                },
                WALK: {
                    key:'robo_walk',
                    path:'./assets/robo/robo_walk.png'
                },
                RUN: {
                    key:'robo_walk',
                    path:'./assets/robo/robo_walk.png'
                },
                JUMP: {
                    key:'robo_idle',
                    path:'./assets/robo/robo_idle.png'                    
                }
            },
            audioAssets:{
            }
        },
        'bandit_green': {
            key: 'bandit_green',
            body:{
                display:{
                    frameWidth: 137,
                    frameHeight: 140,
                    scale:0.8
                },
                health: 100,                
            },
            animations: {
                SPAWN: {
                    key: 'SPAWN',                    
                    frames:{
                        key: 'bandit_green_spawn',
                        startFrame: 0,
                        endFrame: 22,
                    }, 
                    frameRate: 300,
                    repeat: -1
                },
                IDLE: {
                    key: 'IDLE',
                    frames:{
                        key: 'bandit_green_idle',
                        startFrame: 0,
                        endFrame: 22,
                    }, 
                    frameRate: 10,
                    repeat: -1
                },
                WALK: {
                    key: 'WALK',
                    frames:{
                        key: 'bandit_green_walk',
                        startFrame: 0,
                        endFrame: 22,
                    }, 
                    frameRate: 100,
                    repeat: -1
                },
                RUN: {
                    key: 'RUN',
                    frames:{
                        key: 'bandit_green_run',
                        startFrame: 0,
                        endFrame: 22,
                    }, 
                    frameRate: 200,
                    repeat: -1
                },
                JUMP: {
                    key: 'JUMP',
                    frames:{
                        key: 'bandit_green_jump',
                        startFrame: 0,
                        endFrame: 22,
                    }, 
                    frameRate: 10,
                    repeat: -1
                }
            },
            spriteSheets:{
                SPAWN: {
                    key:'bandit_green',
                    path:'./assets/bandit_green/bandit_green_spawn.png'
                },
                IDLE: {
                    key:'bandit_idle',
                    path:'./assets/bandit_green/bandit_green_swipe_idle.png'
                },
                WALK: {
                    key:'bandit_walk',
                    path:'./assets/bandit_green/bandit_green_walk.png'
                },
                RUN: {
                    key:'bandit_run',
                    path:'./assets/bandit_green/bandit_green_walk.png'
                },
                JUMP: {
                    key:'bandit_jump',
                    path:'./assets/bandit_green/bandit_green_swipe_idle.png'                    
                }
            },
            audioAssets:{
            }
        },       
    }
        
}
