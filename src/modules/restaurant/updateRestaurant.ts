import { dbClient } from "../../database";
import { Restaurant } from "../../types/Restaurant";

export const updateRestaurant = async (
    payload: {restaurant: Pick<Restaurant, 'address' | 'email' | 'id' | 'name' | 'phone'>}
) => {

    const {
        id,
        name,
        address,
        email,
        phone
    } = payload?.restaurant;

    const res: Restaurant[] = await dbClient('Restaurants')
        .where({id: id})
        .update({
            name: name,
            address: address,
            phone: phone,
            email: email,
            updatedAt: `${Date.now()}`
        })

    return payload?.restaurant;
    
}