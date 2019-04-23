const knex = require('knex')
const config = require('../../knexfile').development
const db = knex(config)

function getAnimals () {
  return db('animals').select()
    .then(animals => {
      console.log(animals[0])
      return animals.map(animal => {
        animal.nouns = JSON.parse(animal.nouns)

        return animal
      })
    })
}

module.exports = {
  getAnimals
}
