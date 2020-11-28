import React from 'react';
import { Button, Input } from 'antd';
import './LoginPage.scss';
import { useHistory, useLocation } from 'react-router-dom';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { login } from '../../services/UserApi';

export default function LoginPage() {
  let history = useHistory();

  const handleLogin = () => {
    login('admin', 'system');
    history.push('/');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <header className="login-page-header">
          <img src={require('../../images/dubioLogo.png')} />
        </header>
        <Input size="large" placeholder="User Name" className="login-input" />
        <Input.Password
          className="login-input"
          placeholder="input password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />

        <Button onClick={handleLogin} type="primary" block size="large">
          Log in
        </Button>
      </div>
    </div>
  );
}
