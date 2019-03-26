const express = require('express')
const exphbs  = require('express-handlebars');
const server = express()

server.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
server.set('view engine', 'hbs');

server.get('/', (req,res) => {
  res.send(`<h1>Welcome</h1>`)
})

server.get('/name/:name', (req,res) => {
  let person = req.params.name

  let fruit = ['bananas', 'apples', 'pears']
  // if (Math.random() > 0.5) fruit = []
  let showFruit = fruit.length > 1

  res.render('name',
  {
    // layout: 'main',
    name: person,
    fruit: fruit,
    animals: [
      { name: 'monkey', id: 1},
      { name: 'kangaroo', id: 2},
      { name: 'tiger', id: 3},
    ],
    showFruit: showFruit
  })
})


module.exports = server
