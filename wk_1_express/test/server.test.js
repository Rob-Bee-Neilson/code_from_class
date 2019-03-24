var request = require('supertest')

var server = require('../server')

test('it works', function() {
  expect(1+1).toEqual(2)
})

test('static page is working', function(done){
  request(server).get('/static-page')
  .expect(200)
  .end(function(err, res){
    let actual = res.text

    expect(actual).toMatch(/Yay/)

    done()
  })
})
