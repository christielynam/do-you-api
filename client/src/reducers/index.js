import { combineReducers } from 'redux'
import { user } from './user-reducer'
import { loading } from './loading-reducer'
import { error } from './error-reducer'
import { assessments } from './assessments-reducer'

export const rootReducer = combineReducers({
  user,
  loading,
  error,
  assessments
})