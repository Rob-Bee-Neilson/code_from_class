
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
