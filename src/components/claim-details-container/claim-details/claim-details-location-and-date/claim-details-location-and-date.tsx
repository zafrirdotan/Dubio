import React from "react";
import "./claim-details-location-and-date.scss";
import { Button, Divider } from "antd";
import { LinkOutlined } from "@ant-design/icons";

interface IClaimDetailsLocationAndPlace {
  additionalInfo: any;
}
const ClaimDetailsLocationAndPlace = ({
  additionalInfo,
}: IClaimDetailsLocationAndPlace) => {
  return (
    <>
      {additionalInfo.map((el: any, i: number) => (
        <Button
          key={`${i}-${el.location}`}
          type="default"
          shape="round"
          size="large"
          className=" custom-button-location-and-place custom-button-claim-details"
        >
          {el.location}
          <Divider type="vertical" className="divider" /> {el.date}
          <Divider type="vertical" className="divider" /> <LinkOutlined />
        </Button>
      ))}
    </>
  );
};

export default ClaimDetailsLocationAndPlace;
