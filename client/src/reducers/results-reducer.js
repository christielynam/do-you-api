export const results = (state = {}, action) => {
  switch(action.type) {
    case 'SET_RESULTS':
      return action.results
    case 'REMOVE_RESULTS':
      return {}
    default: 
      return state
  }
}