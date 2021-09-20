import React from 'react';
import { Form, Button, Input } from 'antd';
import { registerUser } from '../../server';
import { useMutation } from 'react-query';
import MessageAlert from '../MessageAlert';

const RegisterForm = () => {
  const mutation = useMutation(registerUser);
  const onFinish = async (values) => {
    await mutation.mutate(values);
  }
    return (
        <>
        {mutation.isLoading && (<MessageAlert type="info" message="Checking your credential" />)}
        {mutation.error && (<MessageAlert type="error" message={mutation.error.message} />)}
        {mutation.data && (<MessageAlert type="success" message={mutation.data} />)}
          <Form
          onFinish={onFinish}
          layout="vertical"
          >
              <Form.Item
              label="Full Name"
              name="name"
              rules={[
                  {required: true, message: "Please enter your name"}
                ]}
              >
                  <Input />
              </Form.Item>
              <Form.Item
              label="Email Address"
              name="email"
              rules={[
                  {type: 'email', message: "Please enter a valid email"},
                  { required: true, message: "Enter your email address" }
                ]}
              >
                  <Input />
              </Form.Item>
              <Form.Item
              label="Password"
              name="password"
              rules={[
                  { min: 5, message: "Password must be 6+ characters" },
                  { required: true, message: "Enter your password" }
                ]}
              >
                  <Input.Password />
              </Form.Item>
              <Button
              htmlType="submit"
              block
              loading={mutation.isLoading}
              type="primary"
              >Create Account</Button>
          </Form>
        </>
    )
}

export default RegisterForm;