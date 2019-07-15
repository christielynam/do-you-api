import { combineReducers } from 'redux'
import { userReducer } from './user-reducer'
import { loading } from './loading-reducer'
import { error } from './error-reducer'

export const rootReducer = combineReducers({
  user: userReducer,
  loading: loading,
  error: error
})