import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '@pages/login';
import Home from '@pages/home';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={Home} />
        </Switch>
    );
}
