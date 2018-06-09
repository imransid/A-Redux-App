import { SET_COUNTER, COUNTER_INCREMENT } from './Types'; 

export const counterIncrement = () => {
    return {
        type: COUNTER_INCREMENT
    };
}

export const counterDecrement = () => {
    return {
        type: 'DECREMENT'
    };
}

export const counterClear = () => {
    return {
        type: 'CLEAR'
    }
}


export const counterSet = (receivednumber) => {
    return {
        type: SET_COUNTER,
        payload: receivednumber
    }
}