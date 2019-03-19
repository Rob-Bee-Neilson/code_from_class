var arr = ["one", "two", "three"]
var result = ["oneone", "twotwo", "threethree"]

var myResult = map(arr, function(item){
  return item + item
})

function map(array, func) {
  var myArray = []
  for(var i = 0; i < array.length; i++) {
    myArray.push(func(array[i]))
  }
  return myArray
}

console.log(myResult)
