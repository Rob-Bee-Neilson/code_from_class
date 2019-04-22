import { combineReducers } from 'redux'

import animals from './animals'

const reducers = combineReducers({
  animals: animals
})

export default reducers

// module.exports = {
//   getTodos: getTodos
// }

// module.exports = getTodos

// export function getTodos() {

// }

// export default App

// export default function App() {

// }
