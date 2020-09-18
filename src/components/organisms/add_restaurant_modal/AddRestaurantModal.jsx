import Modal from 'antd/lib/modal/Modal';
import React, { useContext } from 'react';
import { actions, context } from '@stores/home';
import { Input } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';

function AddRestaurantModal() {
    const { dispatch, restaurantModalIsOpen } = useContext(context);
    return (
        <Modal
            title="Adicionar Restaurante"
            visible={restaurantModalIsOpen}
            onOk={() => {
                //adicionar restaurante
                dispatch({ type: actions.SET_RESTAURANT_MODAL_IS_OPEN, payload: false });
            }}
            onCancel={() => dispatch({ type: actions.SET_RESTAURANT_MODAL_IS_OPEN, payload: false })}
        >
            <Input size="large" placeholder="nome" prefix={<PlusSquareOutlined />} />
        </Modal>
    );
}

export default AddRestaurantModal;
