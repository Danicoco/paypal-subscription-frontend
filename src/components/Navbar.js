import React from 'react';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';

class Navbar extends React.Component {
  render() {
    const { current } = this.props;
    return (
      <Menu selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="payment" icon={<MailOutlined />}>
          Subscribe
        </Menu.Item>
        <Menu.Item key="app" icon={<AppstoreOutlined />}>
          Product Access
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navbar;