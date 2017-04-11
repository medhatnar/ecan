import { combineReducers } from 'redux';
import Mail from './mail.js';

const rootReducer = combineReducers({

	mail: Mail

});

export default rootReducer;