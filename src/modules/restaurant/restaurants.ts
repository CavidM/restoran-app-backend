import { dbClient } from "../../database";

function restaurants(page:any, pageSize:any) {
    return  dbClient('restaurants')
}

module.exports = restaurants;