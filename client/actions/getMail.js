import axios from 'axios';
import { GET_MAIL} from '../constants/constants.js';

export function getMail(gauth) {

  let inbox = axios.post('/api/getMail', { gauth })
 					     .then(emails => {
 					     	console.log(emails)
 					     	return emails.data;
 					     })
    return {
	  type: GET_MAIL,
	  payload: inbox
  };
};
