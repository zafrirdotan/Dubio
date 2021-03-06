import React from "react";
import "./relevant-sources.scss";
import { Card, Collapse } from "antd";
import DubioFormCard from "../DubioFormCard/DubioFormCard";
import ClaimHeader from "../claim-header/claim-header";
import PlusSign from "../plus-sign/plus-sign";
const { Panel } = Collapse;

export default function RelevantSourcesList() {
  const plusSignComponent = React.createElement(PlusSign, {
    customClassName: "relevat-source-component",
  });
  const claimHeaderComponent1 = React.createElement(ClaimHeader, {
    title: "Intreview: Donald Trump On The Haward Stern Show",
    dates: ["12 September 2002"],
    rate: 2,
  });

  const claimHeaderComponent2 = React.createElement(ClaimHeader, {
    title: "Intreview: Donald Trump On Fox Business",
    dates: ["15 December 2003"],
    rate: 4,
  });

  const claimHeaderComponentsArr = [
    claimHeaderComponent1,
    claimHeaderComponent2,
    claimHeaderComponent1,
    claimHeaderComponent2,
  ];
  return (
    <div className="relevant-sources">
      <DubioFormCard
        title="Relevant sources for fact-checking this claim"
        collapsible={false}
        submitButtonText="Add new"
      >
        <Collapse
          expandIconPosition="right"
          className="relevant-source-collapse"
          defaultActiveKey={["0-Intreview: Donald Trump On The Haward Stern Show"]}
        >
          {claimHeaderComponentsArr.map((component: any, i: number) => (
            <Panel
            header={component}
            extra={plusSignComponent}
            className="relevant-source-panel"
            key={`${i}-${component.props.title}`}
            >
              <div className="source-content">
                <span className="source-content-header-guide">
                  Explain why this source is relevant
                </span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  corporis voluptatum enim dolore vitae alias dicta dolorum
                  tempore quam esse atque, cumque voluptas deleniti accusamus
                  nisi libero distinctio. Eos, tenetur.
                </p>
              </div>
            </Panel>
          ))}
        </Collapse>
      </DubioFormCard>
    </div>
  );
}
