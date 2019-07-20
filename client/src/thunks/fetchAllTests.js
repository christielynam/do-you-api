import { getBaseUrl } from '../utils/baseUrl'
import { loading, error, setTests } from '../actions'

export const fetchAllTests = (userId) => {
  return async dispatch => {
    const url = `${getBaseUrl()}/api/v1/results/${userId}`
    dispatch(loading(true));
    const response = await fetch(url)
    if(!response.ok) {
      dispatch(error(response.statusText))
    }
    const tests = await response.json()
    dispatch(loading(false))
    dispatch(setTests(tests))
  }
}
