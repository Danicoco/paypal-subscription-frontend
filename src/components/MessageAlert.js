import React from 'react';
import { Alert } from 'antd';

const MessageAlert = ({ type, message }) => {
    return (
        <Alert 
        type={type}
        message={message}
        showIcon
        />
    )
}

export default MessageAlert;