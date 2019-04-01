const express = require('express')
const server = express()

const handlebars  = require('express-handlebars');

server.engine('hbs', handlebars({extname: '.hbs'}));
server.set('view engine', 'hbs');

const dbFunctions = require('./db')

server.get('/vehicles/:customerId', (req,res) => {
    let customerId = req.params.customerId

    dbFunctions.getVehiclesByCustomer(customerId)
    .then(vehicles => {
        console.log('vehicles', vehicles)
        
        return vehicles.map(vehicle => {
            vehicle.customerId = vehicle.customer_id
            delete vehicle.customer_id
            return vehicle
        })
    })
    .then(vehicles => {
        console.log('vehicles', vehicles)

        let viewData = {
            vehicles,
        }
        res.render('vehicles', viewData)
    })
    .catch(err => {
        console.error(err)
        res.send("Something went wrong, you'll probably get a call")
    })
})

module.exports = server
