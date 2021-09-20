import React from 'react';
import  { Form, Button, Input } from 'antd';

const LoginForm = ({ onFinish, loading }) => {
    return (
        <>
          <Form onFinish={onFinish} layout="vertical">
              <Form.Item
              label="Email"
              name="email"
              rules={[
                  { type: 'email', message: 'Enter a valid email' },
                  { required: true, message: 'Enter your email address' }
                ]}
              >
                  <Input />
              </Form.Item>
              <Form.Item
              label="Password"
              name="password"
              rules={[{
                  required: true, message: 'Enter your password'
              }]}
              >
                  <Input.Password />
              </Form.Item>
              <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              block
              >
                  Login
              </Button>
          </Form>
        </>
    )
}

export default LoginForm;