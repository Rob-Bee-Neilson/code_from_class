import React, { Fragment as F } from 'react'
import { connect } from 'react-redux'

import AnimalList from './AnimalList'
import { getAnimals, setAnimals } from '../actions'

class App extends React.Component {
  componentDidMount () {
    console.log('componentDidMount')

    this.props.dispatch(getAnimals())
  }

  render () {
    console.log('render')

    return (
      <F>
        <h1>React development has begun!</h1>
        <AnimalList />
      </F>
    )
  }
}

export default connect()(App)
