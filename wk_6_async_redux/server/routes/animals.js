const express = require('express')
const router = express.Router()
const db = require('../db/animals')

// routes start with /api/v1/animals

router.get('/', (req, res) => {
  console.log('Got a request for the animals')
  db.getAnimals()
    .then(animals => {
      setTimeout(() => {
        res.json(animals)
      }, 3000)
    })
})

module.exports = router