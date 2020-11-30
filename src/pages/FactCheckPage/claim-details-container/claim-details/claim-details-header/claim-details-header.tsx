import React from "react";
import "./claim-details-header.scss";

import {
  CaretUpFilled,
  CaretDownFilled,
  LinkOutlined,
} from "@ant-design/icons";

const claims_datesMadeArr: any = ["12 February 2020", "20 June 2020"];

const ClaimDetailsHeader = () => {
  return (
    <div className="claim-form-header">
      <div className="claim-form-header-counter">
        <CaretUpFilled />
        <p>2</p>
        <CaretDownFilled />
      </div>
      <div className="claim-maker">
        <b>Donald Trump</b>
      </div>
      <div className="claim-dates-made-container">
        {claims_datesMadeArr.map((el: any) => (
          <div className="claim-date-made">
            <LinkOutlined /> <span>{el}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClaimDetailsHeader;