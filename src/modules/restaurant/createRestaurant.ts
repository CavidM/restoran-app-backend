import { dbClient } from "../../database";
import { Restaurant } from "../../types/Restaurant";

export const createRestaurant = async (payload: {restaurant: Pick<Restaurant, 'address' | 'email' | 'name' | 'phone'>}) => {
    const {
        address,
        email,
        name,
        phone
    } = payload?.restaurant    

    const res: Restaurant[] = await dbClient('Restaurants')
        .returning('*')
        .insert({name: name, address: address, phone: phone, email: email})

    return res[0];
}