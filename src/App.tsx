import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import SuspiciousClaimsPage from './pages/SuspiciousClaimsPage/SuspiciousClaimsPage';
import FactCheckPage from './pages/FactCheckPage/FactCheckPage';
import LoginPage from './pages/LoginPage/LoginPage';
import AppLayout from './components/AppLayout/AppLayout';

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route path="/">
          <AppLayout>
            <Switch>
              <Route exact path="/">
                <SuspiciousClaimsPage />
              </Route>
              <Route exact path="/Fact-Check">
                <FactCheckPage />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
            </Switch>
          </AppLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
