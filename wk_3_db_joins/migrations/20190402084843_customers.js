
exports.up = function(knex, Promise) {
    return knex.schema.createTable('customers', table => {
        table.increments('id').primary()
        table.string('name')
        table.string('email')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('customers')
};
