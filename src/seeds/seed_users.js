/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, name: 'Admin User', email: 'admin@example.com', role_id: 1},
    {id: 2, name: 'Regular User', email: 'user@example.com', role_id: 2},
    {id: 3, name: 'Guest User', email: 'guest@example.com', role_id: 3},
  ]);
};
