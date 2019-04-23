import React from 'react'

import { connect } from 'react-redux'

function AnimalList (props) {
  return (
    <div>
      {props.loading && <img src="https://cdn.dribbble.com/users/69182/screenshots/2151363/animated_loading__by__amiri.gif"/>}
      <ul>
        {props.animals.map(animal => {
          return (
            <li key={animal.name}>{animal.name}: {animal.nouns.join(',')}</li>
          )
        })}
      </ul>
    </div>
  )
}

/* <App animals={state.animals} /> */
function mapStateToProps (globalState) {
  return {
    animals: globalState.animals,
    loading: globalState.loading
  }
}

export default connect(mapStateToProps)(AnimalList)
