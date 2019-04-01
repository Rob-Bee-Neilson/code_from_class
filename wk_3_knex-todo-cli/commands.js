const db = require('./db')

function list () {
  // db.getAll()
  //   // .then(listTodos)
  //
  //   .then(todos => {
  //     return listTodos(todos)
  //   })
  //
  //   // .catch(logError)
  //
  //   .catch(err => {
  //     return logError(err)
  //   })
  //   .finally(db.close)

  // If getAll took a callback
  // db.getAll((err, todos) => {
  //   if(err) {
  //     logError(err)
  //   } else {
  //     listTodos(todos)
  //   }
  //
  //   db.close()
  // })

  db.getAll()
    .then(todos => {
      listTodos(todos)
      return todos
    })
    .then(todos => {
      console.log('Listed ' + todos.length + ' records')
    })
    .catch(err => {
      return logError(err)
    })
    .finally(db.close)
}

function listTodos (todos) {
  todos.forEach(todo => {
    console.info(`${todo.id}: ${todo.task}`)
  })
}

function addTodo(task) {
  return db.insertTodo(task).finally(db.close)
}

function logError (err) {
  console.error('Uh oh!', err.message)
}

module.exports = {
  list,
  listTodos,
  logError,
  addTodo
}
