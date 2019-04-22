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
    .select('*', 'vehicles.id AS vehicle_id', 'customers.id AS customer_id', 'customers.name AS customer_name')
    .then(vehicles => {
        return vehicles.map(vehicle => {
            delete vehicle.id
            return vehicle
        })
    })
}

// [{
//     id: 3,
//     name: 'skjdflsd',
//     plate: '124324',
//     customer: {
//         name: 'Robbie'
//     }
// }]


module.exports = {
    getAllVehicles,
    getVehiclesByCustomer,
}

