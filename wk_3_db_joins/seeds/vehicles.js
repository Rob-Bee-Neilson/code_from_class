
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('vehicles').del()
    .then(function () {
      // Inserts seed entries
      return knex('vehicles').insert([
        {id: 10, type: 'Audi', plate: 'ABC123', customer_id: 3},
        {id: 20, type: 'Tesla', plate: 'DEF123', customer_id: 2},
        {id: 30, type: 'Toyota', plate: 'HIJ123', customer_id: 1}
      ]);
    });
};
