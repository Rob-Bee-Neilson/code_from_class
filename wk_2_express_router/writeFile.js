
// JS
let myData = [{
  name: 'fido'
}]

// JSON
let dataToWrite = JSON.stringify(myData)

fs.writeFile('nameoffile.json', dataToWrite, 'utf8', (err) => {
  console.log(err)
})
