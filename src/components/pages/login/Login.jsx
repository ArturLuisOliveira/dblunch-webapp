import React from 'react';
import { Space, Input, Button, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

function Login() {
    const history = useHistory();
    return (
        <div className="flex align-center justify-center full-height full-width">
            <Card>
                <Space size="small" direction="vertical">
                    <Input size="large" placeholder="usuário" prefix={<UserOutlined />} />
                    <Input.Password size="large" placeholder="senha" prefix={<LockOutlined />} />
                    <Button onClick={() => history.push('/home')} type="primary" block>
                        Login
                    </Button>
                </Space>
            </Card>
        </div>
    );
}

export default Login;
