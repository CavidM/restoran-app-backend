// Load Chance
var Chance = require('chance');

// Instantiate Chance so it can be used
var chance = new Chance();

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {

  // Prepare data

  const restaurants = (new Array(100))
  .fill(null)
  .map(() => ({
    name: chance.company(),
    email: chance.email(),
    phone: chance.phone(),
    address: chance.address()
  }))

  // Deletes ALL existing entries
  await knex('Restaurants').del()
  await knex('Restaurants').insert(restaurants);
};
