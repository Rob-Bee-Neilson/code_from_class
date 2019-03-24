
//
// function doSomeWork(){
//   console.log('Doing work, getting tired.')
// }
//
// console.log('About to work')
// doSomeWork()
// console.log('Done some work, resting')

function doSomeWork(callback){
  setTimeout(() => {
    console.log('Doing work, getting tired.')
    let result = 'some output'
    callback(result)
  }, 1000)
}

console.log('About to work')
doSomeWork((result) => {
  console.log('Done some work, resting')
  console.log('By the way, I got this result: ', result)
})
console.log('About to some other work')
