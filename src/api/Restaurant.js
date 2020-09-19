import axios from 'axios';

class RestaurantApi {
    static async list() {
        return axios({
            method: 'get',
            url: `${process.env.API_URL}/restaurants`
        })
            .then(res => res.data.restaurants.Items)
            .catch(console.error);
    }
}
export default RestaurantApi;
