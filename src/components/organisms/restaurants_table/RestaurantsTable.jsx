import { Button, Popconfirm, Table } from 'antd';
import React, { useContext } from 'react';
import { useRestaurants, useVoting } from '../../../utils/hooks/home';
import { context } from '@stores/home';
const { Column } = Table;

function RestaurantsTable() {
    const restaurants = useRestaurants();
    const { dispatch, votingIsAvailable } = useContext(context);

    const vote = useVoting(dispatch);

    return (
        <Table
            dataSource={restaurants}
            pagination={{
                total: restaurants.length,
                pageSize: restaurants.length,
                hideOnSinglePage: true
            }}
        >
            <Column title="Restaurantes" dataIndex="restaurant" key="restaurant" />

            {votingIsAvailable && (
                <Column
                    align="right"
                    title=""
                    dataIndex="action"
                    key="action"
                    render={(value, record) => (
                        <>
                            <Popconfirm
                                placement="left"
                                title={'Votar neste restaurante?'}
                                onConfirm={() => vote(record.restaurant)}
                                okText="Yes"
                                cancelText="No"
                            >
                                <Button type="link">Votar</Button>
                            </Popconfirm>
                        </>
                    )}
                />
            )}
        </Table>
    );
}

export default RestaurantsTable;
