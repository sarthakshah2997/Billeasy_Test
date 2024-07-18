/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('roles').del()
  await knex('roles').insert([
    {id: 1, name: 'admin'},
    {id: 2, name: 'user'},
    {id: 3, name: 'guest'}
  ]);
};
