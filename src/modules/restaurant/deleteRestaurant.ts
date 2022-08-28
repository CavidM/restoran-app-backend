import { dbClient } from "../../database";
import { Restaurant } from "../../types/Restaurant";

export const deleteRestaurant = async (
    payload: {restaurant: Pick<Restaurant, 'id'>}
) => {

    const {
        id
    } = payload?.restaurant;

    const res: Restaurant[] = await dbClient('Restaurants')
        .where({id: id})
        .delete()

    return res;
    
}