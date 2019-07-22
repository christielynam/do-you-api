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
    const result = await response.json()
    dispatch(loading(false))
    if (result.completed_at) {
      dispatch(setResults(result))
    } else {
      const { results } = getState()
      dispatch(setAssessment(Object.assign({}, { id: results.id, deck_id: results.deck_id })))
      dispatch(setSlides(results.slides))
    } 
  }
}





