import { PRESS_HELLO_BUTTON } from '../actions/Types';

const initialState = {
    helloText: 'Hello',
    prssedButton: false,
    helloActionButton: 'Show Me The Masic'
}; 

export default (state = initialState, action) => {
    switch(action.type) {
        case PRESS_HELLO_BUTTON:
            return { ...state, prssedButton: true, helloActionButton: 'You Press The Button ! '} //...state make all state no change :)
        default:
            return state;
    }
}