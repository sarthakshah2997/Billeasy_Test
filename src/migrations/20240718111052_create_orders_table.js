/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  `CREATE TABLE orders (
id SERIAL PRIMARY KEY,
customer_id INTEGER REFERENCES customers(id),
total_amount DECIMAL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  `drop table orders`
};
