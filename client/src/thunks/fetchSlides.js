import { loading, error, setSlides } from '../actions'
import { publicKey } from '../utils/keys'

export const fetchSlides = (testId) => {
  return async dispatch => {
    const url = `https://api.traitify.com/v1/assessments/${testId}/slides`
    dispatch(loading(true));
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${publicKey}:x`
      }
    })
    if(!response.ok) {
      dispatch(error(response.statusText))
    }
    const slides = await response.json()
    dispatch(loading(false))
    dispatch(setSlides(slides))
  }
}
