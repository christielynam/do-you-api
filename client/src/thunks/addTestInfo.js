import { getBaseUrl } from '../utils/baseUrl'

export const addTestInfo = (test_id, deck_id, user_id) => {
  return async dispatch => {
    const url = `${getBaseUrl()}/api/v1/results`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({ test_id, deck_id, user_id })
      })
    return await response.json()
  }
}