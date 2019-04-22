const express = require('express')
const router = express.Router()
const db = require('../db/animals')

// routes start with /api/v1/animals

router.get('/', (req, res) => {
  db.getAnimals()
    .then(animals => {
      res.json(animals)
    })
})

module.exports = router