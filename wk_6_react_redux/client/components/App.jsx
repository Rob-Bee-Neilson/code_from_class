import React from 'react'
import { connect } from 'react-redux'

import AnimalList from './AnimalList'
import { setAnimals } from '../actions'

class App extends React.Component {
  // constructor (props) {
  //   super(props)

  //   // this.state = {
  //   //   animals: [
  //   //     {
  //   //       id: 1,
  //   //       name: 'Cat'
  //   //     },
  //   //     {
  //   //       id: 2,
  //   //       name: 'Dog'
  //   //     },
  //   //     {
  //   //       id: 3,
  //   //       name: 'Mouse'
  //   //     },
  //   //     {
  //   //       id: 4,
  //   //       name: 'Parrot'
  //   //     }
  //   //   ]
  //   // }

  //   // this.deleteAnimal = this.deleteAnimal.bind(this)
  // }

  componentDidMount () {
    const animals = [
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

    this.props.dispatch(setAnimals(animals))
  }

  // deleteAnimal = (id) => {
  // deleteAnimal (id) {
  //   this.setState({
  //     animals: this.state.animals.filter(animal => animal.id !== id)
  //   })
  // }

  render () {
    return (
      <div>
        <h1>Animals!</h1>
        <AnimalList animals={this.props.animals}/>
      </div>
    )
  }
}

// State in this function is Redux Global State
function mapStateToProps (state) {
  return {
    animals: state.animals
  }
}

export default connect(mapStateToProps)(App)
