
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([
        {id: 1, name: 'Robbie'},
        {id: 2, name: 'Kelly'},
        {id: 3, name: 'Engie'}
      ]);
    });
};
