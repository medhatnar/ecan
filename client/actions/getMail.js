import axios from 'axios';
import { GET_MAIL} from '../constants/constants.js';

export function getMail(gauth) {
	console.log("GAUTHERINFOOOOOO: ", gauth)
  let inbox = axios.post('/getMail')
 					     .then(emails => {
 					     	console.log("YOU've GOT MAIL: ",emails);
 					     })
    return {
	  type: GET_MAIL,
	  payload: inbox
  };
};
