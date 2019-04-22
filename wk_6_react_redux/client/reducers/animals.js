import { SET_ANIMALS, DELETE_ANIMAL } from '../actions'

const initialState = []

// action = {
//   type: 'SET_ANIMALS'
//   animals: ['Cat', 'Dog']
// }

const reducer = (state = initialState, action) => {
  console.log('Got an action', action.type, action)

  switch (action.type) {
    case SET_ANIMALS:
      return action.animals
    case DELETE_ANIMAL:
      return state.filter(animal => animal.id !== action.animalId)
    default:
      return state
  }
}

export default reducer
