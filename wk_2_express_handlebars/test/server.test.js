const request = require('supertest')
const cheerio = require('cheerio')

const server = require('../server')

test('it works', () => {
  expect([1,2]).toContain(2)
})

test('Check home route is welcoming', done => {
  request(server).get('/').end((err, res) => {
    const expected = 'Welcome'

    const $ = cheerio.load(res.text)
    const actual = $('h1').text()

    expect(actual).toEqual(expected)

    done()
  })
})

test('Check the name route has some fruit', done => {
  request(server).get('/name/Robbie').end((err, res) => {
    const expected = 3

    const $ = cheerio.load(res.text)
    const actual = $('ul.fruit li.a-fruit').length

    expect(actual).toEqual(expected)

    done()
  })
})
