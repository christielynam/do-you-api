import { loading, error, setAssessment, setResults, setSlides } from '../actions'
import { publicKey } from '../utils/keys'

export const fetchResults = (testId) => {
  return async (dispatch, getState) => {
    const url = `https://api.traitify.com/v1/assessments/${testId}?data=blend,types,career_matches`  
    dispatch(loading(true));
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${publicKey}:x`
      }
    })
    if (!response.ok) {
      dispatch(error(response.statusText))
    }
    const results = await response.json()
    dispatch(loading(false))
    if (results.completed_at) {
      dispatch(setResults(results))
    } else {
      await dispatch(setAssessment(results))
      dispatch(setSlides(results.slides))
    } 
  }
}





