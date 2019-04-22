export const SET_ANIMALS = 'SET_ANIMALS'
export const DELETE_ANIMAL = 'DELETE_ANIMAL'

export function setAnimals (animals) {
  return {
    type: SET_ANIMALS,
    animals: animals
  }
}

export function deleteAnimal (animalId) {
  return {
    type: DELETE_ANIMAL,
    animalId: animalId
  }
}
