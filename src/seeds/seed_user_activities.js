/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_activities').del()
  await knex('user_activities').insert([
    {id: 1, user_id:1, last_active: 'NOW()',  is_active: true},
    {id: 2, user_id:2, last_active: 'NOW()',  is_active: true},
    {id: 3, user_id:3, last_active: 'NOW()',  is_active: false},
  ]);
};
