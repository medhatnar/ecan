export default function(state = null, action) {
  switch(action.type) {

  case 'REVERSE':

  console.log("ACTION PAYLOAD:", action.payload)

    return action.payload
  }

  return state;
}
