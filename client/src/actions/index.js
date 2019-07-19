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

export const removeAssessments = () => ({
  type: 'REMOVE_ASSESSMENTS'
})

export const setPersonalities = (personalities) => ({
  type: 'SET_PERSONALITIES',
  personalities
})

export const removePersonalities = () => ({
  type: 'REMOVE_PERSONALITIES'
})

export const setTests = (tests) => ({
  type: 'SET_TESTS',
  tests
})

export const removeTests = () => ({
  type: 'SET_TESTS'
})

export const setDisplayAssessment = (slides) => ({
  type: 'SET_DISPLAY_SLIDES',
  slides
})

export const setDisplayResults = (results) => ({
  type: 'SET_DISPLAY_RESULTS',
  results
})
