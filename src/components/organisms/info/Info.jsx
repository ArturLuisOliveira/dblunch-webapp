import { Alert } from 'antd';
import React, { useContext } from 'react';
import { context } from '@stores/home';

function Info() {
    const { infoMessage } = useContext(context);
    if (!infoMessage) return null;
    return <Alert message={infoMessage.msg} type={infoMessage.type} banner />;
}

export default Info;
