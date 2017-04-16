import axios from 'axios';
import { GET_USER } from '../constants/constants.js';

export function getUser(user, token) {

  let userAuth = axios.post('/auth/getUser', {user})
 					     .then( token => {
 					     	
 					     	localStorage.setItem('gauth',JSON.stringify(token.data));
 					     })

    return {
	  type: GET_USER,
	  payload: userAuth
  };
};
