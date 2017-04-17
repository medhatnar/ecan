export default function(state = [], action) {
  switch(action.type) {

  case 'REVERSE':

  console.log("YOU'VE GOT MAIL:", action.payload)

    return [action.payload,...state]
  }

  return state;
}
