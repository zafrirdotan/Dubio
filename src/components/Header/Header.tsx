import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
const { Header } = Layout;

export default function AppHeader() {
  return (
    <Header
      className="app-header"
      style={{ backgroundColor: '#615dfa', paddingLeft: '40px' }}
    >
      <div className="app-title">Dubio</div>

      <Menu
        mode="horizontal"
        defaultSelectedKeys={['1']}
        className="header-menu"
        style={{ backgroundColor: 'transparent' }}
        theme="dark"
      >
        <Menu.Item key="1">
          <Link to="/">Top Fact-Checkers</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/about">Platform Metrics</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/users">Fact-Checking Resources</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/users">Forums</Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link to="/users">Events</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}
