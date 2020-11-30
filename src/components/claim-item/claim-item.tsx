import React from 'react';
import { CaretUpFilled, CaretDownFilled } from '@ant-design/icons';
import './claim-item.scss';

interface IClaimItem {
  text: string;
  numberOfLikes: number;
}

export default function ClaimItem({ text, numberOfLikes }: IClaimItem) {
  return (
    <div className="claim-summary-item">
      <div className="voting-button">
        <CaretUpFilled />
        <div>{numberOfLikes}</div>
        <CaretDownFilled />
      </div>

      <div className="claim-text">{text}</div>
    </div>
  );
}
