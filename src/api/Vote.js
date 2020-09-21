import { TOKEN } from '@constants/localStorage';
import { generateQueryString } from '@helpers/common';
import axios from 'axios';

class VoteApi {
    /**
     * @todo email/token should be removed when auth is implemented.
     */
    static async vote({ restaurant }) {
        const token = localStorage.getItem(TOKEN);
        return axios({
            method: 'post',
            url: `${process.env.API_URL}/vote`,
            data: { restaurant, token }
        })
            .then(res => res.data)
            .catch(console.error);
    }

    /**
     * @todo token should be passed as header.
     */
    static async available() {
        const token = localStorage.getItem(TOKEN);
        return axios({
            method: 'get',
            url: `${process.env.API_URL}/vote?${generateQueryString({ email: token })}`
        })
            .then(res => res.data)
            .catch(console.error);
    }
}
export default VoteApi;
