import { getBaseUrl } from '../utils/baseUrl'
import { setTests } from '../actions';

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
    const testInfo = await response.json()
    dispatch(setTests(testInfo))
  }
}