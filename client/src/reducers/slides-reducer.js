export const slides = (state = [], action) => {
  switch(action.type) {
    case 'SET_SLIDES':
      return action.slides
    case 'REMOVE_SLIDES':
      return []
    default: 
      return state
  }
}