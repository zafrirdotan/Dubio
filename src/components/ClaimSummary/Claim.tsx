import React from 'react';
import { CaretUpFilled, CaretDownFilled } from '@ant-design/icons';

interface IClaim {
  text: string;
  numberOfLikes: number;
}

export default function Claim({ text, numberOfLikes }: IClaim) {
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
