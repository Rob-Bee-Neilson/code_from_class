import React from 'react'

import Animal from './Animal'

function AnimalList (props) {
  return (
    <ul>
      {props.animals.map(animal => {
        return (
          <Animal key={animal.id} animal={animal} deleteAnimal={props.deleteAnimal}/>
        )
      })}
    </ul>
  )
}

export default AnimalList