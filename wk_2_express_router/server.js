const express = require('express')
const server = express()

const countriesRoutes = require('./routes/countries')

server.use('/countries', countriesRoutes)

server.get('/', (req,res) => {
  res.send('OK')
})

// server.get('/countries', (req,res) => {
//
//   let list = []
//   for (let code in countries) {
//     list.push(`<li><a href="/countries/${code}">${countries[code]}</a></li>`)
//   }
//
//   res.send('<ul>' + list.join('') + '</ul>')
// })
//
// server.get('/countries/:code', (req,res) => {
//   let code = req.params.code
//   res.send(`<p>The capital of ${countries[code]} (${code}) is ${capitals[code]}</p>`)
// })


module.exports = server
