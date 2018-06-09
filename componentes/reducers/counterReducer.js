import { SET_COUNTER, COUNTER_INCREMENT } from '../actions/Types';

export default (state = 0, action) => { //init state and condition
    switch(action.type){
        case COUNTER_INCREMENT:
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'CLEAR':
            return 0;
        case SET_COUNTER:
            return action.payload;
        default:
            return state
    }
}