import { Button, Popconfirm, Table } from 'antd';
import { context } from '@stores/home';
import React, { useContext } from 'react';
const { Column } = Table;
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
function RestaurantsTable() {
    const { votingIsAvailable } = useContext(context);
    return (
        <Table
            dataSource={data}
            pagination={{
                total: columns.length,
                pageSize: columns.length,
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
                    render={() => (
                        <>
                            <Popconfirm
                                placement="left"
                                title={'Votar neste restaurante?'}
                                onConfirm={() => {}}
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
