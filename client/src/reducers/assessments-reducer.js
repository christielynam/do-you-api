export const assessments = (state = [], action) => {
  switch(action.type) {
    case 'SET_ASSESSMENTS':
      return action.assessments
    default:
      return state
  }
}