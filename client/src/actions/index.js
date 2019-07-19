export const setUser = (user) => ({
  type: 'SET_USER',
  user
})

export const removeUser = () => ({
  type: 'REMOVE_USER'
})

export const loading = (bool) => ({
  type: 'LOADING',
  loading: bool
}) 

export const error = (msg) => ({
  type: 'ERROR',
  msg
})

export const setAssessments = (assessments) => ({
  type: 'SET_ASSESSMENTS',
  assessments
})

export const setDisplayResults = (results) => ({
  type: 'SET_DISPLAY_RESULTS',
  results
})

export const setDisplayAssessment = (slides) => ({
  type: 'SET_DISPLAY_SLIDES',
  slides
})

