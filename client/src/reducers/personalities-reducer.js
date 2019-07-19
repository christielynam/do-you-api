export const personalities = (state = [], action) => {
  switch(action.type) {
    case 'SET_PERSONALITIES':
      return action.personalities
    case 'REMOVE_PERSONALITIES':
      return []
    default:
      return state
  }
}