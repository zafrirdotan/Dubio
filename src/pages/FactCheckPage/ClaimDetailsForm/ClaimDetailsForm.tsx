import React, { useState } from 'react';
import './ClaimDetailsForm.scss';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import DubioFormCard from '../../../components/DubioFormCard/DubioFormCard';
import { Collapse } from 'antd';
const { Panel } = Collapse;
export default function ClaimDetailsForm() {
  return (
    <div className="claim-form">
      <DubioFormCard
        title="Who made the claim? When? Where?"
        collapsible={true}
        submitButtonText="Add new"
      >
        <Collapse>
          <Panel header="This is panel header 1" key="1">
            <p>bubu</p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>bubu</p>
          </Panel>
          <Panel header="This is panel header 3" key="3">
            <p>bubu</p>
          </Panel>
        </Collapse>
      </DubioFormCard>
    </div>
  );
}
