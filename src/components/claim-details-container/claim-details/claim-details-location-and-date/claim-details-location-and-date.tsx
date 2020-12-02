import React from "react";
import "./claim-details-location-and-date.scss";
import { Button, Divider } from "antd";
import { LinkOutlined } from "@ant-design/icons";

const ClaimDetailsLocationAndPlace = (props: any) => {
  return (
    <>
      {props.additionalInfo.map((el: any, i: number) => (
        <Button
          key={i}
          type="default"
          shape="round"
          size="large"
          className=" custom-button-location-and-place"
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
