import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers'
import App from './components/App'

const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    // Subscribe to the store
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})
