const path = require('path')

module.exports = {
    client: 'better-sqlite3',
  connection: {
    filename: path.resolve(__dirname, "./storage/restaurants.db")
  },
  useNullAsDefault: true,
  migrations: {
    directory: './migrations',
  },
  seeds: {
    directory: './seeds',
  },
};