import { Avatar, Badge } from 'antd';
import React from 'react';
import './UserAvatar.scss';
import { UserOutlined } from '@ant-design/icons';
export default function UserAvatar() {
  return (
    <>
      <Badge count={1}>
        <Avatar shape="square" icon={<UserOutlined />} />
      </Badge>
    </>
  );
}
