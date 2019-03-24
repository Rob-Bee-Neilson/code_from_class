
// Standard JS (ES <= 5)
function doSomeWork(arg1, arg2) {
  return 'Work'
}

var doSomeWork = function(arg1, arg2) {
  return 'Work'
}

// Arrow function
var doSomeWork = (arg1, arg2) => {
  return 'Work'
}

// Arrow function with implicit return
var doSomeWork = (arg1, arg2) => 'Work'

// Arrow function with implicit return, single arg
var doSomeWork = arg => 'Work'


// doSomeWork()

// var, let and const

// function myFunction() {
//   console.log('Start')
//   console.log(message)
//   var message = 'hello'
// }

// function myFunction() {
//   console.log('Start')
//   console.log(message)
//   let message = 'hello'
// }

function myFunction() {
  console.log('Start')
  // console.log(message)
  let message = 'hello'
  message = 'hello'
}

myFunction()
