import React from 'react'
import request from 'superagent'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      animals: []
    }
  }

  componentDidMount () {
    console.log('componentDidMount')
    
    request.get('/api/v1/animals')
      .then(res => {
        const animals = res.body
        this.setState({ animals: animals })
      })
  }

  render () {
    console.log('render')

    return (
      <React.Fragment>
        <h1>React development has begun!</h1>
        <ul>
          {this.state.animals.map(animal => {
            return (
              <li key={animal.name}>{animal.name}: {animal.nouns.join(',')}</li>
            )
          })}
        </ul>
      </React.Fragment>
    )
  }
}

export default App

