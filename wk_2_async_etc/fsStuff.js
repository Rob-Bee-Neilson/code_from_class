const fs = require('fs')

console.log('reading the file')
fs.readFile('./data1.txt', 'utf8', (err, data) => {
  if(err) {
    console.error('error', err)
  } else {
    console.log('data', data)
  }
})
console.log('finished reading the file?')
console.log('nope.')
