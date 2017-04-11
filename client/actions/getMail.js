import axios from 'axios';
import { GET_MAIL} from '../constants/constants.js';

export function getMail() {

  let inbox = axios.get('/api/getMail')
 					     .then(emails => {
 					     	console.log("YOU've GOT MAIL: ",emails);
 					     })
    return {
	  type: GET_MAIL,
	  payload: inbox
  };
};
