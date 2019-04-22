const express = require('express')
const router = express.Router()

const db = require('../db/db.js')

router.get('/', (req, res) => {
  db.getWidgets()
    .then(widgets => {
      res.send(widgets)
    })
    .catch(err => {
      console.error(err)
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  db.saveWidget(req.body)
    .then(res.sendStatus(200))
})

router.delete('/:id', (req, res) => {
  const id = req.params.id

  // Destructuring
  // const {id} = req.params

  db.deleteWidget(id)
    .then(() => {
      res.json({})
    })
})

module.exports = router
