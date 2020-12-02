import React from "react";
import "./claim-details-job-title.scss";
import { Button } from "antd";
import PlusSign from "../../../plus-sign/plus-sign";

const ClaimDetailsJobTitle = (props: any) => {
  return (
    <>
      {props.jobTitles.map((el: string, i: number) => (
        <Button
          key={i}
          type="default"
          size="large"
          shape="round"
          className="custom-button"
        >
          {el}
        </Button>
      ))}
    </>
  );
};

export default ClaimDetailsJobTitle;
