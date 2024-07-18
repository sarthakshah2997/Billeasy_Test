/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('orders').del()
  await knex('orders').insert([
    {id: 1, customer_id: 1, total: '100.00'},
    {id: 2, customer_id: 1, total: '200.00'},
    {id: 3, customer_id: 1, total: '300.00'},
  ]);
};
