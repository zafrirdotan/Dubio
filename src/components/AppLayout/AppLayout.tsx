import { Layout } from 'antd';
import React from 'react';
import { useLocation } from 'react-router-dom';
import AppHeader from './Header/Header';
import LeftSideBar from './LeftSideBar/LeftSideBar';
const { Content } = Layout;

interface IAppLayout {
  children: JSX.Element;
}

export default function AppLayout({ children }: IAppLayout) {
  let location = useLocation();

  return location.pathname !== '/login' ? (
    <Layout>
      <AppHeader />
      <Layout>
        <LeftSideBar />
        <Content>{children}</Content>
      </Layout>
    </Layout>
  ) : (
    children
  );
}
