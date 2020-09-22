import axios from 'axios';

class RestaurantApi {
    /**
     * @todo email/token should be removed when auth is implemented.
     */
    static async list() {
        return axios({
            method: 'get',
            url: `${process.env.API_URL}/restaurants`
        })
            .then(res => res.data.restaurants)
            .catch(console.error);
    }
}
export default RestaurantApi;
