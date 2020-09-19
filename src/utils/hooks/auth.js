import { TOKEN } from '@constants/localStorage';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const useAuth = () => {
    const history = useHistory();
    useEffect(() => {
        const token = localStorage.getItem(TOKEN);
        token ? history.push('/home') : history.push('/login');
    }, []);
};
