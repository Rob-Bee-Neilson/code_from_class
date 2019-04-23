const animalData = require('../data/list-of-animal-venery.json')
const animals = animalData.list_of_animals

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('animals').del()
    .then(function () {
      // Inserts seed entries
      return knex('animals').insert(animals.map(animal => {
        return {
          name: animal.animal,
          nouns: JSON.stringify(animal.nouns)
        }
      }))
    })
}
