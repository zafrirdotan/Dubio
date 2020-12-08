import React from 'react';
import { PlusOutlined } from '@ant-design/icons';

import './claim-summary.scss';
import ClaimItem from '../claim-item/claim-item';
import DubioFormCard from '../DubioFormCard/DubioFormCard';
export default function ClaimSummary() {
  return (
    <DubioFormCard
      title="Claim summary"
      rightHeaderIcon={
        <PlusOutlined style={{ color: 'white', fontSize: '1.1rem' }} />
      }
      submitButtonText="Add new"
    >
      <div className="claim-summary-content">
        <ClaimItem text="bubuu" numberOfLikes={1} />
        <ClaimItem text="bubuu" numberOfLikes={1} />
        <ClaimItem text="bubuu" numberOfLikes={1} />
      </div>
    </DubioFormCard>
  );
}
