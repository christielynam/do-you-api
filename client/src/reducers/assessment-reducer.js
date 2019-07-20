export const assessment = (state = {}, action) => {
  switch(action.type) {
    case 'SET_ASSESSMENT':
      return action.assessment
    case 'REMOVE_ASSESSMENT':
      return {}
    default:
      return state
  }
}