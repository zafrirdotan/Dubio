import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import AppHeader from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LeftSideBar from './components/LeftSideBar/LeftSideBar';
import SuspiciousClaimsPage from './pages/SuspiciousClaimsPage/SuspiciousClaimsPage';
import { Layout } from 'antd';

const { Content } = Layout;
function App() {
  return (
    // <div className="App">
    <Router>
      <Layout>
        <AppHeader />
        <Layout>
          <LeftSideBar />
          <Content>
            <Switch>
              <Route path="/">
                <SuspiciousClaimsPage />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
    // </div>
  );
}

export default App;
