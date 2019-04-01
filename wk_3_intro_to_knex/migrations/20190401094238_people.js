
exports.up = function(knex, Promise) {
  return knex.schema.createTable('people', table => {
    table.increments('id').primary()
    table.string('full_name')
    table.string('preferred_name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('people')
};
