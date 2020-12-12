import Input from 'antd/lib/input';
import React from 'react';
import './DubioSearchInput.scss';

export default function DubioSearchInput(props: {
  onChange: (ev: any) => void;
  label: string;
  value: string;
}) {
  return (
    <div className="dubio-input-container">
      <label className="dubio-input-label">{props.label}</label>
      <Input
        placeholder="Keyword or phrase"
        size="large"
        className="dubio-select-input"
        bordered={false}
        {...props}
      />
    </div>
  );
}
