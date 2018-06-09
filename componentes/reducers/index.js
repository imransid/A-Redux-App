import { combineReducers } from 'redux';
import  counterReducer  from './counterReducer';
import  helloReducer  from './helloReducer';

export default combineReducers({ //now make a mapping
    counter: counterReducer,
    hello: helloReducer
});