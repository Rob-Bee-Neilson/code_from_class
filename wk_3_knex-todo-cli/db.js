const config = require('./knexfile').development
const database = require('knex')(config)

function getAll (db = database) {
  return db('todos').select()
}

function insertTodo(task, db = database) {
  return db('todos').insert({ task: task })
}

function close (db = database) {
  db.destroy()
}

module.exports = {
  getAll,
  close,
  insertTodo,
}
