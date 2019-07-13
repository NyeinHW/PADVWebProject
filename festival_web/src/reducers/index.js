import {combineReducers} from 'redux';
import festivals from './festivals';
import orders from './orders';
import accessories from './accessories';
import customs from './customs';
import locations from './locations';
import token from './auth';

export default combineReducers({
    festivals,
    orders,
    accessories,
    customs,
    locations,
    token
})