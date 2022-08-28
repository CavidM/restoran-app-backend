import knex from "knex";
import { Restaurant } from "../types/Restaurant";

const path = require('path')

declare module 'knex/types/tables' {
  
  interface Tables {
    // This is same as specifying `knex<User>('users')`
    Restaurants: Restaurant;
  }
}


export const dbClient = knex({
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
});

dbClient.on( 'query', function( queryData ) {
  console.log( queryData );
});

dbClient.on( 'insert', function( queryData ) {
  console.log( 'inser: ',  queryData );
});
