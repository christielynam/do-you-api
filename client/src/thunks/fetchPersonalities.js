import { publicKey } from '../utils/keys'
import { loading, error, setPersonalities } from '../actions'

export const fetchPersonalities = () => {
  return async dispatch => {
    dispatch(loading(true));
    const response = await fetch('https://api.traitify.com/v1/decks', {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${publicKey}:x`
      }
    })
    if (!response.ok) {
      dispatch(error(response.statusText))
    }
    const personalities = await response.json()
    dispatch(loading(false))
    dispatch(setPersonalities(personalities))
  }
}
