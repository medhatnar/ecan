import axios from 'axios';
import { GET_USER } from '../constants/constants.js';

export function getUser() {

  let currentUser = axios.get('/auth/getUrl')
 					     .then(url => {
 					     	console.log("URL",url)
 					     	window.open(url.data, 'auth')
 					     })
    return {
	  type: GET_USER,
	  payload: currentUser
  };
};
