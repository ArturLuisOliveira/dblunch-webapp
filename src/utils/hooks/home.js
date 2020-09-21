import { useEffect, useState } from 'react';
import RestaurantApi from '@api/Restaurant';
import VoteApi from '@api/Vote';
import { message } from 'antd';

export const useRestaurants = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        RestaurantApi.list()
            .then(restaurants => setRestaurants(restaurants.map(({ name: restaurant }, key) => ({ key, restaurant }))))
            .catch(console.error);
    }, []);
    return restaurants;
};

export const useVoting = () => {
    const [votingIsAvailable, setVotingIsAvailable] = useState(false);

    const vote = async restaurant =>
        VoteApi.vote({ restaurant })
            .then(() => {
                setVotingIsAvailable(false);
                message.success('Voto efetuado com sucesso.');
            })
            .catch(message.error('Ocorreu um erro ao efetuar seu voto'));

    useEffect(() => {
        VoteApi.available().then(res => setVotingIsAvailable(res.available));
    }, []);
    return { vote, votingIsAvailable };
};
