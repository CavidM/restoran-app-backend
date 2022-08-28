import { createRestaurant } from "../modules/restaurant/createRestaurant";
import { deleteRestaurant } from "../modules/restaurant/deleteRestaurant";
import { restaurants } from "../modules/restaurant/restaurants";
import { searchRestaurants } from "../modules/restaurant/searchRestaurants";
import { updateRestaurant } from "../modules/restaurant/updateRestaurant";

// The root provides a resolver function for each API endpoint
export const root = {
    restaurants: restaurants,
    searchRestaurants: searchRestaurants,
    createRestaurant: createRestaurant,
    updateRestaurant: updateRestaurant,
    deleteRestaurant: deleteRestaurant,
  };
  