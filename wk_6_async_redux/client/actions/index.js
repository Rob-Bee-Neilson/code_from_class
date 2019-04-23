import request from 'superagent'

export const SET_ANIMALS = 'SET_ANIMALS'
export const SET_LOADING = 'SET_LOADING'

export function setAnimals (animals) {
  return {
    type: SET_ANIMALS,
    animals: animals
  }
}

export function getAnimals () {
  return dispatch => {
    dispatch(setLoading(true))
    request.get('/api/v1/animals')
      .then(res => {
        dispatch(setLoading(false))
        const animals = res.body
        dispatch(setAnimals(animals))
      })
  }
}

export function setLoading (loading) {
  return {
    type: SET_LOADING,
    loading: loading
  }
}
