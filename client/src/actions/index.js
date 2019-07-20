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

export const setTests = (tests) => ({
  type: 'SET_TESTS',
  tests
})

export const removeTests = () => ({
  type: 'SET_TESTS'
})

export const setSlides = (slides) => ({
  type: 'SET_SLIDES',
  slides
})

export const removeSlides = () => ({
  type: 'REMOVE_SLIDES'
})

export const setResults = (results) => ({
  type: 'SET_RESULTS',
  results
})

export const removeResults = () => ({
  type: 'REMOVE_RESULTS'
})
