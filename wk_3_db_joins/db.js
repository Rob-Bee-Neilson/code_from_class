const knex = require('knex')
const config = require('./knexfile').development
const db = knex(config)

function getAllVehicles() {
    return db('vehicles').select()
}   

function getVehiclesByCustomer(customerId) {
    // return db('vehicles')
    // .where('customer_id', '=',customerId)
    // .select()

    return db('vehicles')
    .join('customers', 'vehicles.customer_id', '=', 'customers.id')
    .where('customer_id', '=', customerId)
    .select()
}

module.exports = {
    getAllVehicles,
    getVehiclesByCustomer,
}

