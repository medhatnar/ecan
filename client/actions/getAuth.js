import axios from 'axios';
import { GET_AUTH } from '../constants/constants.js';

export function getAuth(username) {
	console.log()
  let url = axios.post('/auth/getUrl', {username})
 					     .then(url => {
 					     	console.log("URL",url.data);

 					     	location.href = url.data;
 					     })
    return {
	  type: GET_AUTH,
	  payload: url
  };
};
