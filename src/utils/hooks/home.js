import { useCallback, useEffect, useState } from 'react';
import RestaurantApi from '@api/Restaurant';
import VoteApi from '@api/Vote';
import { message } from 'antd';
import MessageApi from '@api/Message';
import { actions } from '@stores/home';

export const useRestaurants = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        RestaurantApi.list()
            .then(restaurants => setRestaurants(restaurants.map(({ name: restaurant }, key) => ({ key, restaurant }))))
            .catch(console.error);
    }, []);
    return restaurants;
};

export const useVoting = dispatch => {
    const vote = useCallback(
        async restaurant =>
            VoteApi.vote({ restaurant })
                .then(() => {
                    dispatch({ type: actions.SET_VOTING_IS_AVAILABLE, payload: false });
                    message.success('Voto efetuado com sucesso.');
                })
                .catch(message.error('Ocorreu um erro ao efetuar seu voto')),
        [dispatch]
    );

    return vote;
};

export const useMessages = dispatch => {
    useEffect(() => {
        MessageApi.getMessage()
            .then(res => {
                dispatch({ type: actions.SET_INFO_MESSAGE, payload: { ...res } });
                dispatch({ type: actions.SET_VOTING_IS_AVAILABLE, payload: res.enabled });
            })
            .catch(console.error);
    }, []);
};
