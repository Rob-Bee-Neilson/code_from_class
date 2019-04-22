
exports.up = function(knex, Promise) {
    return knex.schema.createTable('vehicles', table => {
        table.increments('id').primary()
        table.string('type')
        table.string('plate')
        table.integer('customer_id')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('vehicles')
};


// up: addColumn
// move data from old column to new

// move data back
// down: dropColumn


// up: renameColumn '1', '2'

// down: renameColumn '2', '1'