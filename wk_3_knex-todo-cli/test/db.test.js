const db = require('../db')
const testEnv = require('./test-environment')

let testDb = null

// Create a separate in-memory database before each test.
beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

// Destroy the database connection after each test.
afterEach(() => testEnv.cleanup(testDb))


test('it works', () => {
  expect(7).toEqual(7)
})

test('getAll', () => {
  db.getAll(testDb).then(todos => {
    let expected = 4

    let actual = todos.length

    expect(actual).toEqual(expected)
  })
})
