var myInvoiceData = require('./data.json')


function printAddress(address) {
  console.log("AddressType: ", address["AddressType"] || "")
  console.log("AddressLine1: ", address["AddressLine1"] || "")
  console.log("AddressLine2: ", address["AddressLine2"] || "")
  console.log("City: ", address["City"] || "")
  console.log("PostalCode: ", address["PostalCode"] || "")
  console.log("")
}

function printAddresses(invoiceData) {
  var contactAddresses = getContactAddresses(invoiceData, 1)
  for(var i = 0; i < contactAddresses.length; i++) {
    var address = contactAddresses[i]
    printAddress(address)
  }
}


function getInvoices(invoiceData) {
  return invoiceData["Invoices"]
}

function getInvoice(invoiceData, invoiceNumber) {
  return getInvoices(invoiceData)[invoiceNumber - 1]
}

function getContactAddresses(invoiceData, invoiceNumber) {
  return getInvoice(invoiceData, invoiceNumber)["Contact"]["Addresses"]
}

module.exports = {
  getInvoices: getInvoices,
  getInvoice: getInvoice,
  getContactAddresses: getContactAddresses,
}
