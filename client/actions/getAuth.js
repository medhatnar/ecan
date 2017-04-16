import axios from 'axios';
import { GET_AUTH } from '../constants/constants.js';

export function getAuth(username) {

  let url = axios.post('/auth/getUrl', {username})
 					     .then(url => {
 					     	console.log("URL",url);

 					     	// location.assign(url.data)
 					     })
    return {
	  type: GET_AUTH,
	  payload: url
  };
};
