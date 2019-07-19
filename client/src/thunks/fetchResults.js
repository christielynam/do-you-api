import { loading, error, setAssessments, setDisplayResults, setDisplayAssessment } from '../actions'
import { publicKey } from '../utils/keys'

export const fetchResults = (testId) => {
  return async dispatch => {  
    dispatch(loading(true));
    const response = await fetch(`https://api.traitify.com/v1/assessments/${testId}?data=blend,types,career_matches`, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${publicKey}:x`
      }
    })
    if (!response.ok) {
      dispatch(error(response.statusText))
    }
    const parsedResponse = await response.json()
    dispatch(loading(false))
    if (parsedResponse.completed_at) {
      dispatch(setDisplayResults(parsedResponse))
    } else {
      dispatch(setAssessments({id: parsedResponse.id, deck_id: parsedResponse.deck_id}))
      dispatch(setDisplayAssessment(parsedResponse.slides))
    } 
  }
}

// Object.assign({}, { id: parsedResponse.id, deck_id: parsedResponse.deck_id })


