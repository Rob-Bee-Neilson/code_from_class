const path = require('path')
const express = require('express')
const animalRoutes = require('./routes/animals')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/animals', animalRoutes)

module.exports = server
