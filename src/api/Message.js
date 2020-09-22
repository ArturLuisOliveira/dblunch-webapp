import Axios from 'axios';
import { generateQueryString } from '@helpers/common';
import { TOKEN } from '@constants/localStorage';

class MessageApi {
    static async getMessage() {
        const token = localStorage.getItem(TOKEN);
        return Axios({
            method: 'get',
            url: `${process.env.API_URL}/messages?${generateQueryString({ email: token })}`
        })
            .then(res => res.data)
            .catch(err => {
                console.error('request error', err);
            });
    }
}
export default MessageApi;
