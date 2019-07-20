export const tests = (state = [], action) => {
  switch(action.type) {
    case 'SET_TESTS':
      return [...state, action.testInfo]
    case 'REMOVE_TESTS':
      return []
    default:
      return state
  }
}