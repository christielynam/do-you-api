import { loading, error, setAssessments} from '../actions'
import { secretKey } from '../utils/keys'

export const fetchAssessments = (testType) => {
  return async dispatch => {
    dispatch(loading(true));
    const response = await fetch('https://api.traitify.com/v1/assessments', {
      method: 'POST',
      body: JSON.stringify({ 'deck_id': testType }),
      headers: {
        'Authorization': `Basic ${secretKey}:x`,
        'Content-Type': 'application/json'
      }
    })
    if(!response.ok) {
      dispatch(error(response.statusText))
    }
    const assessments = await response.json()
    dispatch(loading(false))
    dispatch(setAssessments(assessments))
  }
}
