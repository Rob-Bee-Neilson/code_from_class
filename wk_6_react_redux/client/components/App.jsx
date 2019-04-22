import React from 'react'

import AnimalList from './AnimalList'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      animals: [
        {
          id: 1,
          name: 'Cat'
        },
        {
          id: 2,
          name: 'Dog'
        },
        {
          id: 3,
          name: 'Mouse'
        },
        {
          id: 4,
          name: 'Parrot'
        }
      ]
    }

    this.deleteAnimal = this.deleteAnimal.bind(this)
  }

  // deleteAnimal = (id) => {
  deleteAnimal (id) {
    this.setState({
      animals: this.state.animals.filter(animal => animal.id !== id)
    })
  }

  render () {
    return (
      <div>
        <h1>Animals!</h1>
        <AnimalList animals={this.state.animals} deleteAnimal={this.deleteAnimal}/>
      </div>
    )
  }
}

export default App
