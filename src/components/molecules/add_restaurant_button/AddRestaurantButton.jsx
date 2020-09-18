import React, { useContext } from 'react';
import { actions, context } from '@stores/home';
import { Button } from 'antd';

function AddRestaurantButton() {
    const { dispatch } = useContext(context);
    return (
        <Button onClick={() => dispatch({ type: actions.SET_RESTAURANT_MODAL_IS_OPEN, payload: true })} type="primary">
            Adicionar Restaurante
        </Button>
    );
}

export default AddRestaurantButton;
