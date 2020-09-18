import { Alert } from 'antd';
import React, { useContext } from 'react';
import { context } from '@stores/home';

function Info() {
    const { infoMessage } = useContext(context);
    return <Alert message={infoMessage.message} type={infoMessage.type} banner />;
}

export default Info;
