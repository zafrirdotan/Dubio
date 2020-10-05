import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Layout from 'antd/lib/layout/layout';
import AppHeader from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LeftSideBar from './components/LeftSideBar/LeftSideBar';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <AppHeader />
          <LeftSideBar />
          <Switch>
            <Route path="/about"></Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
