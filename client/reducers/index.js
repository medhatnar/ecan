import { combineReducers } from 'redux';
import Mail from './mail.js';
import Auth from './auth.js';

const rootReducer = combineReducers({

	mail: Mail,
	logging: Auth

});

export default rootReducer;