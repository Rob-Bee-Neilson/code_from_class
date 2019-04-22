import React from 'react'

function Animal (props) {
  return (
    <li>
      {props.animal.name} 
      <button onClick={() => props.deleteAnimal(props.animal.id)}>X</button>
    </li>
  )
}

export default Animal
