import axios from 'axios';
import { GET_MAIL} from '../constants/constants.js';

export function getMail(gauth) {

  let inbox = axios.post('/api/getMail', { gauth })
 					     .then(emails => {
 					     	console.log("YOU've GOT MAIL: ",emails);
 					     })
    return {
	  type: GET_MAIL,
	  payload: inbox
  };
};
