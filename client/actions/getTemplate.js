import axios from 'axios';
import { GET_TEMPLATE } from '../constants/constants.js';

export function getTemplate(id) {

	let template = axios.post('/api/getTemplae', { id })
						.then(template => {
							console.log("TEMPLATE: ", template)
						})
		
    return {
	  type: GET_AUTH,
	  payload: url
  };
};