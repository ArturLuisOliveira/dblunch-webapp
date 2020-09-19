import { useCallback } from 'react';
import AuthApi from '@api/Auth';
import { TOKEN } from '@constants/localStorage';
import { useHistory } from 'react-router-dom';
import { message } from 'antd';

export const useLogin = ({ email, password }) => {
    const history = useHistory();
    const login = useCallback(() => {
        AuthApi.login({ email, password })
            .then(res => {
                if (res.token) {
                    localStorage.setItem(TOKEN, res.token);
                    history.push('/home');
                }
            })
            .catch(() => {
                message.error('Senha ou email inválido');
            });
    }, [email, password]);
    return login;
};
