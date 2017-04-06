import axios from 'axios';
import {GET_MAIL} from '../constants/constants.js';

const getUser = () => {
  let currentUser = axios.get('/api/getUserInfo');
    return {
	  type: "GET_USER",
	  payload: currentUser
  };
};

export default getUser;