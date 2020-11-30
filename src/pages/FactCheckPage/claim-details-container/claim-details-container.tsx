import React, { useState } from "react";
import "./claim-details-container.scss";

import DubioFormCard from "../../../components/DubioFormCard/DubioFormCard";
import ClaimDetails from "./claim-details/claim-details";

export default function ClaimDetailsContainer() {
  return (
    <div className="claim-details-container">
      <DubioFormCard
        title="Claim Details: Who? When?"
        collapsible={true}
        submitButtonText="Add new"
      >
        <ClaimDetails />
      </DubioFormCard>
    </div>
  );
}
