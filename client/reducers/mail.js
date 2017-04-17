export default function(state = [], action) {
  switch(action.type) {

  case 'GET_MAIL':

  console.log("YOU'VE GOT MAIL")

    return [action.payload,...state]
  }

  return state;
}
