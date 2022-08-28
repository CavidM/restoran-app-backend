/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

    return knex.schema
    .createTable('Restaurants', function (table) {
        table.increments('id');
        table.string('name', 255).notNullable();
        table.string('address', 255).notNullable();
        table.string('email', 255).notNullable();
        table.string('phone', 255).notNullable();
        table.timestamp('createdAt').defaultTo(Date.now())
        table.string('updatedAt', 100).nullable();
        table.string('deletedAt', 100).nullable()
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTable('Restaurants')
};
