/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('customers').del()
  await knex('customers').insert([
    {id: 1, name: 'Customer One', email: 'customer1@example.com'},
    {id: 2, name: 'Customer Two', email: 'customer2@example.com'}
  ]);
};
