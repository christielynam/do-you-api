import { loading, error, setUser } from '../actions'
import { getBaseUrl } from '../utils/baseUrl'

export const fetchUserFromDB = (email, password) => {
  return async dispatch => {
    dispatch(loading(true));
    const response = await fetch(`${getBaseUrl()}/api/v1/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
    if(!response.ok) {
      dispatch(error(response.statusText))
    }
    const user = await response.json()
    dispatch(loading(false))
    dispatch(setUser(user))
  }
}