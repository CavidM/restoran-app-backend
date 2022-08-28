module.exports = {
  client: 'sqlite3',
  connection: {
    filename: './storage/restaurants.db',
  },
  migrations: {
    directory: './migrations',
  },
  seeds: {
    directory: './seeds',
  },
}