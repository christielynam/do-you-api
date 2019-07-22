import { loading, error, setAssessment, setResults } from '../actions'
import { fetchSlides } from '../thunks/fetchSlides'
import { publicKey } from '../utils/keys'

export const fetchResults = (testId) => {
  return async dispatch => {
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
    if (results.status === 'complete') {
      dispatch(setResults(results))
    } else {
      dispatch(setAssessment(results))
      dispatch(fetchSlides(results.id))
      // dispatch(setSlides(assessment.slides))
    } 
  }
}





