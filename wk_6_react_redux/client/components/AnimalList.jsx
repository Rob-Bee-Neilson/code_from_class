import React from 'react'

import Animal from './Animal'

function AnimalList (props) {
  return (
    <ul>
      {props.animals.map(animal => {
        return (
          <Animal key={animal.id} animal={animal}/>
        )
      })}
    </ul>
  )
}

export default AnimalList