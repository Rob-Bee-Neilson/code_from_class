import React from 'react'
import { connect } from 'react-redux'

import { deleteAnimal } from '../actions'

function Animal (props) {
  return (
    <li>
      {props.animal.name}
      <button onClick={() => props.dispatch(deleteAnimal(props.animal.id))}>X</button>
    </li>
  )
}

export default connect()(Animal)
