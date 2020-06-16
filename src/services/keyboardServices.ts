import {    
    movementKeys,
} from '../enums/_keyboard';

export class KeyboardServices {
keyboardInputs;
input;

    constructor(input) {  
        this.input = input; 
    }

    IfAnyKeyIsDownValidation () {   
        this.keyboardInputs = this.input.keyboard.addKeys(movementKeys);   
        var checker = false;
        if (this.keyboardInputs.A.isDown) {
            checker = true;
        }
        if (this.keyboardInputs.W.isDown) {
            checker = true;
        }
        if (this.keyboardInputs.S.isDown) {
            checker = true;
        }
        if (this.keyboardInputs.D.isDown) {
            checker = true;
        }                                                
        return checker;
    }
}