import React from 'react';
import {
  BookOutlined,
  LaptopOutlined,
  CheckOutlined,
  TableOutlined,
} from '@ant-design/icons';
import './LeftSideBar.scss';
import UserAvatar from '../Header/Avatar/UserAvatar';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

export default function LeftSideBar() {
  return (
    <Sider className="side-menu" collapsed={true}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <div className="avatar-item">
          <UserAvatar />
        </div>
        <Menu.Item key="2" icon={<LaptopOutlined />}></Menu.Item>
        <Menu.Item key="3" icon={<TableOutlined />}></Menu.Item>

        <Menu.Item key="4" icon={<BookOutlined />}></Menu.Item>
        <Menu.Item key="5" icon={<CheckOutlined />}></Menu.Item>
      </Menu>
    </Sider>
  );
}
