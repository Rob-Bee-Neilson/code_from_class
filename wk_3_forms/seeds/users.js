
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Robbie', profile_id: 10},
        {id: 2, name: 'Kelly', profile_id: 20},
        {id: 3, name: 'Engie', profile_id: 30}
      ]);
    });
};
