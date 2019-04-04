
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
      table.increments('id').primary()
      table.string('name')
      table.integer('profile_id')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')  
};
