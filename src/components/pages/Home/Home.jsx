import React, { useMemo, useReducer } from 'react';
import { Space, Layout } from 'antd';
const { Footer, Content } = Layout;
import { reducer, initialState } from '@stores/home';
import { context as HomeContext } from '@stores/home';
import Info from '@organisms/info';
import RestaurantsTable from '@organisms/restaurants_table';
import LogoutButton from '@molecules/logout_button';
import AddRestaurantButton from '@molecules/add_restaurant_button/AddRestaurantButton';
import AddRestaurantModal from '@organisms/add_restaurant_modal/AddRestaurantModal';

function Home() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const contextValue = useMemo(() => ({ ...state, dispatch }), [state, dispatch]);

    return (
        <div className="flex column justify-space-between full-min-height">
            <HomeContext.Provider value={contextValue}>
                <Info />
                <Content className="margin-2">
                    <RestaurantsTable />
                </Content>
                <Footer>
                    <Space align="center" direction="vertical" className="full-width">
                        <AddRestaurantButton />
                        <LogoutButton />
                    </Space>
                </Footer>
                <AddRestaurantModal />
            </HomeContext.Provider>
        </div>
    );
}

export default Home;
