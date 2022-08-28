import { dbClient } from "../../database";
import { QueryParams } from "../../types/QueryParams";

export function restaurants(query: QueryParams) {
    
    const {page, pageSize} = query;

    const offset = page * pageSize - pageSize;

    return  dbClient('Restaurants')
    .select('name', 'address', 'phone', 'email', 'id')
    .limit(pageSize)
    .offset(offset)
}
