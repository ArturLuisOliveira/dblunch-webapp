import VoteApi from '@api/Vote';
import { message } from 'antd';
export const vote = async restaurant =>
    VoteApi.vote({ restaurant })
        .then(() => message.success('Voto efetuado com sucesso.'))
        .catch(() => message.error('Ocorreu um erro ao efetuar seu voto'));
