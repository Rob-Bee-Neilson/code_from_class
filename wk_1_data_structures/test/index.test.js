var myFunctions = require('../index')

test('jest is working', function() {
  expect(1+1).toEqual(2)
})

test('getInvoices returns the correct value', function() {
  // Arrange
  var data = { "Invoices": "The cat" }

  var expected = "The cat"

  // Act
  var actual = myFunctions.getInvoices(data)

  // Assert
  expect(actual).toEqual(expected)
})


test('getInvoice returns the correct invoice', function() {
  // Arrange
  var invoiceData = { "Invoices": ["one", "two"] }
  var invoiceNumber = 2

  var expected = "two"

  // Act
  var actual = myFunctions.getInvoice(invoiceData, invoiceNumber)

  // Assert
  expect(actual).toEqual(expected)
})
