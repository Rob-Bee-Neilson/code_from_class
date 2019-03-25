const fs = require('fs')

// This is async
function getTheDataFromTheFile(filename, callback) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      callback(err)
    } else {
      callback(null, data)
    }
  })
}

// console.log(getTheDataFromTheFile())


getTheDataFromTheFile('myFile.txt', (err, data) => {
  if(err) {
    console.error('It all went wrong...  See:', err)
  } else {
    console.log('I got some data!!!', data)
  }
})

module.exports = getTheDataFromTheFile
