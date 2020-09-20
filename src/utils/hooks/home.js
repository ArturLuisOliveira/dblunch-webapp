import { useEffect, useState } from 'react';
import RestaurantApi from '@api/Restaurant';

export const useRestaurants = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        RestaurantApi.list()
            .then(restaurants => setRestaurants(restaurants.map(({ name: restaurant }, key) => ({ key, restaurant }))))
            .catch(console.error);
    }, []);
    return restaurants;
};
