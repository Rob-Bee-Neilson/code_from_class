const request = require('supertest')
const cheerio = require('cheerio')

const server = require('../server')

test('it works', () => {
  expect(15).toBeGreaterThan(6)
})

test('the form works', done => {
  request(server).get('/form').end((err, res) => {
    expect(err).toBeFalsy()

    const expected = 1

    const $ = cheerio.load(res.text)
    const actual = $('form').length

    expect(actual).toEqual(expected)

    done()
  })
})

test('the form submits', done => {
  request(server)
    .post('/form')
    .send("name=test&age=104")
    .expect(302)
    .end((err, res) => {
    expect(err).toBeFalsy()

    done()
  })
})
