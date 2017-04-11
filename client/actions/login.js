import axios from 'axios';
import { LOGIN } from '../constants/constants.js';
import { browserHistory } from 'react-router';

export function login(username,password) {

  	const page = axios.post('/auth/login',{username, password})
					  .then(res => {
					  	let token = res.data.token;
					  	if(!token) {
					  		console.log("INVALID")
					  	} else {
					  	localStorage.setItem('token',res.data.token, 'username', username);
					  	console.log("TOKEN STORED", localStorage)
					  	}
					  	
					  })
  	
  return {
    type: LOGIN,
    payload: page
  };
}
