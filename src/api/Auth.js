import axios from 'axios';

class AuthApi {
    static async login({ email, password }) {
        return axios({
            method: 'post',
            url: `${process.env.API_URL}/users/login`,
            data: { email, password }
        })
            .then(res => res.data)
            .catch(console.error);
    }
}
export default AuthApi;
