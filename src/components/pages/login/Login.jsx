import React, { useMemo, useReducer } from 'react';
import { Space, Input, Button, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { actions, reducer, initialState, context as LoginContext } from '@stores/login';
import { useLogin } from '@hooks/login';

function Login() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const contextValue = useMemo(() => ({ ...state, dispatch }), [state, dispatch]);

    const login = useLogin({ ...state });

    return (
        <>
            <LoginContext.Provider value={contextValue}>
                <div className="flex align-center justify-center full-height full-width">
                    <Card>
                        <Space size="small" direction="vertical">
                            <Input
                                value={state.email}
                                onChange={e => dispatch({ type: actions.SET_EMAIL_INPUT, payload: e.target.value })}
                                size="large"
                                placeholder="usuário"
                                prefix={<UserOutlined />}
                            />
                            <Input.Password
                                value={state.password}
                                onChange={e => dispatch({ type: actions.SET_PASSWORD_INPUT, payload: e.target.value })}
                                size="large"
                                placeholder="senha"
                                prefix={<LockOutlined />}
                            />
                            <Button onClick={login} type="primary" block>
                                Login
                            </Button>
                        </Space>
                    </Card>
                </div>
            </LoginContext.Provider>
        </>
    );
}

export default Login;
