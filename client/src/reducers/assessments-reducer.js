export const assessments = (state = [], action) => {
  switch(action.type) {
    case 'SET_ASSESSMENTS':
      return action.assessments
    case 'REMOVE_ASSESSMENTS':
      return []
    default:
      return state
  }
}