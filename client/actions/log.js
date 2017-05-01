import axios from 'axios';
import { LOGIN } from '../constants/constants.js';
import { LOGOUT } from '../constants/constants.js';

export function log(bool) {

  	let newBool = bool;

  	if(bool) {
	  return {
	    type: LOGIN,
	    payload:newBool
	  };
  		
  	} else {
  		return {
  			type: LOGOUT,
  			payload: newBool
  		}
  	}
  	
}
