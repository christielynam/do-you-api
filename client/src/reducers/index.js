import { combineReducers } from 'redux'
import { user } from './user-reducer'
import { loading } from './loading-reducer'
import { error } from './error-reducer'
import { assessments } from './assessments-reducer'
import { personalities } from './personalities-reducer'
import { tests } from './tests-reducer'

export const rootReducer = combineReducers({
  assessments,
  error,
  loading,
  personalities,
  tests,
  user
})