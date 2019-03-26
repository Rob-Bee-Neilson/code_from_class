const server = require('./server')

const PORT = 3000

console.log('Getting ready to start the server')
server.listen(PORT, () => {
  console.log('Server is up on port', PORT)
})
console.log('Told the server to start')
