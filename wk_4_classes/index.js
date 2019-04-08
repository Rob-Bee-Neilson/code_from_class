class Greeter {
  constructor(person) {
    this.person = person
  }

  greet() {
    console.log(this)
    console.log('hello ' + this.person)
  }

  changePerson(person) {
    this.person = person
  }
}

class FancyGreeter extends Greeter {
  constructor(salutation, person)  {
    super(person)
    this.person = person
    this.salutation = salutation
  }

  greet() {
    console.log(this.salutation + ' ' + this.person)
  }
}

var myGreeter  = new FancyGreeter('hi', 'ross')

myGreeter.greet()
myGreeter.changePerson('robbie')
myGreeter.greet()

