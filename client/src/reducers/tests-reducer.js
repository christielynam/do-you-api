export const tests = (state = [], action) => {
  switch(action.type) {
    case 'SET_TESTS':
      return action.tests
    case 'REMOVE_TESTS':
      return []
    default:
      return state
  }
}