import { loading, error, setAssessment, setResults, setSlides } from '../actions'
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
    console.log(results)
    dispatch(loading(false))
    if (results.completed_at) {
      dispatch(setResults(results))
    } else {
      dispatch(setAssessment(Object.assign({}, { id: results.id, deck_id: results.deck_id })))
      // dispatch(setSlides(results.slides))
    } 
  }
}





