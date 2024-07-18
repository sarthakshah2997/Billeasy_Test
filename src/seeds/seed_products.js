/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    {id: 1, name: 'Product One', description: 'Description One', category: 'electronics', price: '500.00', available: true},
    {id: 2, name: 'Product Two', description: 'Description Two', category: 'home', price: '150.00', available: true},
  ]);
};
