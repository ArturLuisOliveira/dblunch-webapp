import React, { useMemo, useReducer } from 'react';
import { Alert, Table, Button, Modal, Input, Space, Layout } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
const { Footer, Content } = Layout;
const { Column } = Table;
import { reducer, initialState, actions } from '@stores/home';
import { context as HomeContext } from '@stores/home';
import { useHistory } from 'react-router-dom';

const columns = [
    {
        title: 'Restaurante',
        dataIndex: 'restaurant',
        key: 'restaurant'
    },
    {
        title: '',
        dataIndex: 'action',
        key: 'action'
    }
];

const data = [
    {
        key: '1',
        restaurant: 'Gelson Lanches'
    },
    {
        key: '2',
        restaurant: 'Speed Lanches'
    }
];

function Home() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const history = useHistory();
    const contextValue = useMemo(() => ({ ...state, dispatch }), [state, dispatch]);

    return (
        <div className="flex column justify-space-between full-min-height">
            <HomeContext.Provider value={contextValue}>
                <Alert message="Warning text" type="success" banner />

                <Content className="margin-2">
                    <Table
                        dataSource={data}
                        pagination={{
                            total: columns.length,
                            pageSize: columns.length,
                            hideOnSinglePage: true
                        }}
                    >
                        <Column title="Restaurantes" dataIndex="restaurant" key="restaurant" />
                        {state.votingIsAvailable && (
                            <Column
                                align="right"
                                title=""
                                dataIndex="action"
                                key="action"
                                render={() => <Button type="link">Votar</Button>}
                            />
                        )}
                    </Table>
                </Content>
                <Footer>
                    <Space align="center" direction="vertical" className="full-width">
                        <Button
                            onClick={() => dispatch({ type: actions.SET_RESTAURANT_MODAL_IS_OPEN, payload: true })}
                            type="primary"
                        >
                            Adicionar Restaurante
                        </Button>
                        <Button onClick={() => history.push('/login')} type="link">
                            Logout
                        </Button>
                    </Space>
                </Footer>
                <Modal
                    title="Adicionar Restaurante"
                    visible={state.restaurantModalIsOpen}
                    onOk={() => {
                        //adicionar restaurante
                        dispatch({ type: actions.SET_RESTAURANT_MODAL_IS_OPEN, payload: false });
                    }}
                    onCancel={() => dispatch({ type: actions.SET_RESTAURANT_MODAL_IS_OPEN, payload: false })}
                >
                    <Input size="large" placeholder="nome" prefix={<PlusSquareOutlined />} />
                </Modal>
            </HomeContext.Provider>
        </div>
    );
}

export default Home;
