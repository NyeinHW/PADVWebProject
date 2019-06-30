import {combineReducers} from 'redux';
import festivals from './festivals';
import orders from './orders';

export default combineReducers({
    festivals,
    orders
})