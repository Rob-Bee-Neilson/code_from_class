let colors = ['red', 'blue', 'green']

let otherColors = ['black', ...colors, 'orange', 'purple']

let pet = {
  name: 'po',
  type: 'dog',
  color: 'brindle'
}

console.log(otherColors)

console.log({
  ...pet,
  name: 'bob'
})
