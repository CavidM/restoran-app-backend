import { buildSchema } from 'graphql';

// Construct a schema, using GraphQL schema language
export const schema = buildSchema(`
  type Restaurant {
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
    restaurants (page: Int, pageSize: Int): [Restaurant]
    searchRestaurants(searchTerm: String, page: Int, pageSize: Int): [Restaurant]
  }
  input CreateRestaurantInput {
    name: String
    address: String
    email: String
    phone: String
  }
  input UpdateRestaurantInput {
    id: Int
    name: String
    address: String
    email: String
    phone: String
  }
  input DeleteRestaurantInput {
    id: Int
  }
  type Mutation {
    createRestaurant(restaurant: CreateRestaurantInput): Restaurant
    updateRestaurant(restaurant: UpdateRestaurantInput): Restaurant
    deleteRestaurant(restaurant: DeleteRestaurantInput): Restaurant
  }
`);