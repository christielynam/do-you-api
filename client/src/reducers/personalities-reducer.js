export const personalities = (state = [], action) => {
  switch(action.type) {
    case 'SET_PERSONALITIES':
      return action.personalities
    default:
      return state
  }
}