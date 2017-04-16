export default function(state = null, action) {
  switch(action.type) {

  case 'LOGIN':
  	console.log("LOGGIN IN!", action.payload)
    return action.payload
    break;

  case 'LOGOUT':
  	console.log("LOGGING OUT!", action.payload)
  	return action.payload
  	break;
  }

  return state;
}
