import { loading, error } from '../actions'
import { publicKey } from '../utils/keys'

export const updateSlideResponse = (slide, testId) => {
  return async dispatch => {
    const url = `https://api.traitify.com/v1/assessments/${testId}/slides/${slide.id}`
    dispatch(loading(true));
    const response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify({
        id: slide.id,
        response: slide.response,
        time_taken: 2000,
      }),
      headers: {
        'Authorization': `Basic ${publicKey}:x`,
        'Content-Type': 'application/json'
      }
    })
    if(!response.ok) {
      dispatch(error(response.statusText))
    }
    dispatch(loading(false))
    return await response.json()
  }
}
