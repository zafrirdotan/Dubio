import React from "react";
import "./claim-details-maker.scss";
import { Button, Divider } from "antd";
import { LinkOutlined } from "@ant-design/icons";

const ClaimDetailsMaker = (props: any) => {
  return (
    <>
      {props.infoLinks.map((el: string, i: number) => (
        <Button
          key={`${i}-${el}`}
          type="default"
          size="large"
          shape="round"
          className=""
        >
          {el}
          <Divider type="vertical" className="divider" /> <LinkOutlined />
        </Button>
      ))}
    </>
  );
};

export default ClaimDetailsMaker;
