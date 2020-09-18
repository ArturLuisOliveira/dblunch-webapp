import { Button } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';

function LogoutButton() {
    const history = useHistory();
    return (
        <Button onClick={() => history.push('/login')} type="link">
            Logout
        </Button>
    );
}

export default LogoutButton;
