import { OurScenes } from '../enums/_scenes';

export class Characters extends Phaser.Scene {
CharactersConfigurations: object;
    constructor(){
        super({
            key: OurScenes.CHARACTERS,  
        });
    }

    create(){      

     this.CharactersConfigurations = {
         a:'a',
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
                    frames: this.anims.generateFrameNumbers('steamman_idle', { start: 0, end: 5 }),
                    frameRate: 10,
                    repeat: -1
                },
                IDLE: {
                    key: 'IDLE',
                    frames: this.anims.generateFrameNumbers('steamman_idle', { start: 0, end: 5 }),
                    frameRate: 10,
                    repeat: -1
                },
                WALK: {
                    key: 'WALK',
                    frames: this.anims.generateFrameNumbers('steamman_walk', { start: 0, end: 5 }),
                    frameRate: 100,
                    repeat: -1
                },
                RUN: {
                    key: 'RUN',
                    frames: this.anims.generateFrameNumbers('steamman_run', { start: 0, end: 5 }),
                    frameRate: 200,
                    repeat: -1
                },
                JUMP: {
                    key: 'JUMP',
                    frames: this.anims.generateFrameNumbers('steamman_jump', { start: 0, end: 5 }),
                    frameRate: 10,
                    repeat: -1
                }
            },
            spriteSheets:{                
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
                    frames: this.anims.generateFrameNumbers('robo_idle', { start: 0, end: 28 }),
                    frameRate: 10,
                    repeat: -1
                },
                IDLE: {
                    key: 'IDLE',
                    frames: this.anims.generateFrameNumbers('robo_idle', { start: 0, end: 28 }),
                    frameRate: 10,
                    repeat: -1
                },
                WALK: {
                    key: 'WALK',
                    frames: this.anims.generateFrameNumbers('robo_walk', { start: 0, end: 28 }),
                    frameRate: 100,
                    repeat: -1
                },
                RUN: {
                    key: 'RUN',
                    frames: this.anims.generateFrameNumbers('robo_walk', { start: 0, end: 28 }),
                    frameRate: 200,
                    repeat: -1
                },
                JUMP: {
                    key: 'JUMP',
                    frames: this.anims.generateFrameNumbers('robo_idle', { start: 0, end: 28 }),
                    frameRate: 10,
                    repeat: -1
                }
            },
            spriteSheets:{
                SPAWN: {
                    key:'robo_idle',
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
                    frames: this.anims.generateFrameNumbers('bandit_green_spawn', { start: 0, end: 22 }),
                    frameRate: 300,
                    repeat: -1
                },
                IDLE: {
                    key: 'IDLE',
                    frames: this.anims.generateFrameNumbers('bandit_idle', { start: 0, end: 28 }),
                    frameRate: 10,
                    repeat: -1
                },
                WALK: {
                    key: 'WALK',
                    frames: this.anims.generateFrameNumbers('bandit_walk', { start: 0, end: 28 }),
                    frameRate: 100,
                    repeat: -1
                },
                RUN: {
                    key: 'RUN',
                    frames: this.anims.generateFrameNumbers('bandit_run', { start: 0, end: 28 }),
                    frameRate: 200,
                    repeat: -1
                },
                JUMP: {
                    key: 'JUMP',
                    frames: this.anims.generateFrameNumbers('bandit_jump', { start: 0, end: 28 }),
                    frameRate: 10,
                    repeat: -1
                }
            },
            spriteSheets:{
                SPAWN: {
                    key:'bandit_green_spawn',
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
}
