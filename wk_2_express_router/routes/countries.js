const express = require('express')
const router = express.Router()

const countries = require('../countries')
const capitals = require('../capitals')

router.get('/', (req,res) => {
  let list = []
  for (let code in countries) {
    list.push(`<li><a href="/countries/${code}">${countries[code]}</a></li>`)
  }

  res.send('<ul>' + list.join('') + '</ul>')
})

router.get('/:code', (req,res) => {
  let code = req.params.code
  res.send(`<p>The capital of ${countries[code]} (${code}) is ${capitals[code]}</p>`)
})

module.exports = router
