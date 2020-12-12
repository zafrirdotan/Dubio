import React from "react";
import "./claim-details-job-title.scss";
import { Button } from "antd";

const ClaimDetailsJobTitle = ({jobTitles}: any) => {
  return (
    <>
      {jobTitles.map((el: string, i: number) => (
        <Button
          key={`${i}-${el}`}
          type="default"
          size="large"
          shape="round"
          className="custom-button-claim-details"
        >
          {el}
        </Button>
      ))}
    </>
  );
};

export default ClaimDetailsJobTitle;
