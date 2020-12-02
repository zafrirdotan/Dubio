import React from "react";
import "./claim-header.scss";

import {
  CaretUpFilled,
  CaretDownFilled,
  LinkOutlined,
} from "@ant-design/icons";

interface IClaimHeader {
  title: string;
  dates: string[];
  rate: number;
}

export default function ClaimHeader(props: IClaimHeader) {
  return (
    <div className="claim-form-header">
      <div className="claim-form-header-counter">
        <CaretUpFilled />
        <p>{props.rate}</p>
        <CaretDownFilled />
      </div>
      <div className="claim-maker">
        <b>{props.title}</b>
      </div>
      <div className="claim-dates-made-container">
        {props.dates.map((el: any, i: number) => (
          <div key={i} className="claim-date-made">
            <LinkOutlined /> <span>{el}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
