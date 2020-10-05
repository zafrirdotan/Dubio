import { Card } from 'antd';
import React from 'react';

export default function DubioCard(props: any) {
  return (
    <Card style={{ borderRadius: '12px', display: 'flex' }}>
      {props.children}
    </Card>
  );
}
