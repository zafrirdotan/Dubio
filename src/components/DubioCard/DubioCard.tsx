import { Card } from 'antd';
import { CardProps } from 'antd/lib/card';
import React from 'react';

export default function DubioCard(props: CardProps) {
  return (
    <Card
      {...props}
      style={{ ...props.style, borderRadius: '12px' }}
      headStyle={{
        borderRadius: '12px 12px 0 0',
        backgroundColor: '#615dfa',
        color: 'white',
      }}
    >
      {props.children}
    </Card>
  );
}
