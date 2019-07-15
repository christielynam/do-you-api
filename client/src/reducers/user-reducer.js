export const user = (state = {}, action) => {
  switch(action.type) {
    case 'SET_USER':
      return action.user[0]
    case 'REMOVE_USER':
      return {}
    default:
      return state
  }
}