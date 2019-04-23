import { combineReducers } from 'redux'

import animals from './animals'
import loading from './loading'

const reducers = combineReducers({
  animals,
  loading
})

export default reducers
