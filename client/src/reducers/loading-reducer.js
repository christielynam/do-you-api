export const loading = (state = false, action) => {
  switch(action.type) {
    case 'LOADING':
      return action.loading
    default:
      return state
  }
}