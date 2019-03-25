const getTheDataFromTheFile = require('../index')

test('Check it works', () => {
  expect(1+1).toEqual(2)
})

test('getTheDataFromTheFile gives an error for a missing file', done => {
  getTheDataFromTheFile('thisfile.txt', (err, data) => {
    let actual = err

    expect(err).toBeTruthy()

    done()
  })
})


test('getTheDataFromTheFile gives the data back for a file that exists', done => {
  getTheDataFromTheFile('index.js', (err, data) => {
    let actualError = err
    let actualData = data

    expect(err).toBeFalsy()
    expect(data).toBeTruthy()

    done()
  })
})
