import React from "react";
import "./claim-details.scss";

import { Timeline } from "antd";
import { Collapse } from "antd";
import ClaimDetailsHeader from "./claim-details-header/claim-details-header";

const { Panel } = Collapse;

export default function ClaimDetails() {
  return (
    <div className="claim-details">
      <Collapse>
        <Panel header={React.createElement(ClaimDetailsHeader)} key="1">
          <Timeline className="claim-timeline">
            <Timeline.Item className="claim-timeline-item">
              <b>Job Title (select one):</b> <br />
              <div className="claim-button-tags">
                <button className="btn-custom">
                  President of the United States
                </button>
                <button className="btn-custom">President</button>
              </div>
            </Timeline.Item>
          </Timeline>
        </Panel>
      </Collapse>
    </div>
  );
}
