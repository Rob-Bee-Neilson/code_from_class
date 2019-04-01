const knex = require('knex')
const config = require('./knexfile').development
const db = knex(config)

db('people').select().then(people => {
  people.forEach(person => {
    console.log(person['full_name'])
  })
})
