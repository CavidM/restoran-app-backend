const restaurants = require("../modules/restaurant/restaurants");

// The root provides a resolver function for each API endpoint
module.exports.root = {
    restaurants: restaurants,
  };
  