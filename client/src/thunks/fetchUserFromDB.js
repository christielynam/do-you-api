import { loading, error, setUser } from '../actions'

export const fetchUserFromDB = (email, password) => {
  return async dispatch => {
    dispatch(loading(true));
    const response = await fetch('http://localhost:3001/api/v1/users', {
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
    console.log(user)
    dispatch(loading(false))
    dispatch(setUser(user))
  }
}