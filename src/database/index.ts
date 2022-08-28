import knex from "knex";

const path = require('path')

export const dbClient = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, "./storage/restaurants.db")
  }
});