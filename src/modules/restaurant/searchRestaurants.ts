import { dbClient } from "../../database";
import { RestaurantQueryParams } from "../../types/QueryParams";

export const searchRestaurants = (query: RestaurantQueryParams) => {
    const {searchTerm, page, pageSize} = query

    const offset = page * pageSize - pageSize;
    
    const searchTermExperssion = `%${searchTerm}%`

    return dbClient('Restaurants')
        .select('*')
        .whereLike('address', searchTermExperssion)
        .orWhereLike('email', searchTermExperssion)
        .orWhereLike('name', searchTermExperssion)
        .orWhereLike('phone', searchTermExperssion)
        .limit(pageSize)
        .offset(offset)

}