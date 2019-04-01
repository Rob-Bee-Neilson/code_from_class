
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(function () {
      // Inserts seed entries
      return knex('people').insert([
        {id: 1, full_name: 'Abigail', preferred_name: 'Abi'},
        {id: 2, full_name: 'Alexandra', preferred_name: 'Alex'},
        {id: 3, full_name: 'Alison', preferred_name: 'Ali'}
      ]);
    });
};
