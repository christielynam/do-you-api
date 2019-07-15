import { loading, error, setUser } from '../actions'

export const addUserToDB = (name, email, password) => {
  return async dispatch => {
    dispatch(loading(true));
    const response = await fetch('http://localhost:3001/api/v1/users/new', {
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
    dispatch(loading(false))
    dispatch(setUser(user))
  }
}
