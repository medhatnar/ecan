import axios from 'axios';
import { GET_AUTH } from '../constants/constants.js';

export function getAuth(username) {

  let currentUser = axios.post('/auth/getUrl', {username})
 					     .then(url => {
 					     	console.log("URL",url)
 					     	window.open(url.data, 'auth')
 					     })
    return {
	  type: GET_AUTH,
	  payload: currentUser
  };
};
