import { Button, Popconfirm, Table } from 'antd';
import { context } from '@stores/home';
import React, { useContext } from 'react';
import { useRestaurants } from '../../../utils/hooks/home';
import { vote } from '@helpers/home';
const { Column } = Table;

function RestaurantsTable() {
    const { votingIsAvailable } = useContext(context);
    const restaurants = useRestaurants();

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
