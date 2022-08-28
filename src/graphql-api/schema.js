var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
module.exports.schema = buildSchema(`
  type Restaurants {
    id: Int
    name: String
    address: String
    email: String
    phone: String
    createdAt: String
    updatedAt: String
    deletedAt: String
  }
  type Query {
    restaurants (page: Int, pageSize: Int): [Restaurants]
  }
`);