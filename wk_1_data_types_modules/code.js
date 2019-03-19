var functons = require('./myFunctions')

var types = {
  b: true,
  n: null,
  un: undefined,
  st: 'this is a string',
  num: 1.5,
  ar: ['one', 'two', 'three'],
  obj: { one: 1, two: 2},
  nan: NaN,
  func: function() { console.log('I am a function') }
}

console.log('I am a boolean?', typeof types.b)
console.log('I am a null?', typeof types.n)
console.log('I am a undefined?', typeof types.un)
console.log('I am a string?', typeof types.st)
console.log('I am a number?', typeof types.num)
console.log('I am a array?', typeof types.ar)
console.log('I am a object?', typeof types.obj)
console.log('I am a false?', typeof types.nan)
console.log('I am a function?', typeof types.func)

// var arr = ['one', 'three', 'two']
// {
//   0: 'one',
//   1: 'two'
//   2: 'three',
// }
// console.log(arr[2])
//
// var obj = { one: 1, three: 3, two: 2, }
// console.log(obj['two'])


// function printSomething() {
//   console.log('something')
// }

// console.log(typeof printSomething)
functions['printSomething']()

var anotherThing = printSomething

console.log(typeof anotherThing)

anotherThing()

function callMyFunction(func) {
  func()
}
console.log('wat?')
callMyFunction(anotherThing)
