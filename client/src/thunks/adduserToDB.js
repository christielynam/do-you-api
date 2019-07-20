import { loading, error, setUser } from '../actions'
import { getBaseUrl } from '../utils/baseUrl'

export const addUserToDB = (name, email, password) => {
  return async dispatch => {
    dispatch(loading(true));
    const response = await fetch(`${getBaseUrl()}/api/v1/users/new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    })
    
    if (!response.ok) {
      dispatch(error(response.statusText))
    }
    const user = await response.json()
    console.log(user)
    dispatch(loading(false))
    dispatch(setUser(user))
  }
}
