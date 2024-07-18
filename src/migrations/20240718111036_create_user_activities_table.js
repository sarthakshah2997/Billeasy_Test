/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  `CREATE TABLE user_activities (
id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users(id),
last_active TIMESTAMP,
is_active BOOLEAN DEFAULT TRUE
);`
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  `drop table user_activities`
};
