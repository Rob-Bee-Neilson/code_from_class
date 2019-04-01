
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: 'Code'},
        {id: 2, task: 'Eat'},
        {id: 3, task: 'Sleep'},
        {id: 4, task: 'Repeat'}
      ]);
    });
};
