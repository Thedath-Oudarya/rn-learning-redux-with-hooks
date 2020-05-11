import { combineReducers } from 'redux'
import FirstReducer from './FirstReducer'
import SecondReducer from './SecondReducer'

export default combineReducers({
  first: FirstReducer,
  second: SecondReducer
})
