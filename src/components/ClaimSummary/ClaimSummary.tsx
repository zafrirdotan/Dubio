import React from 'react';
import DubioCard from '../DubioCard/DubioCard';
import { PlusOutlined } from '@ant-design/icons';

import './ClaimSummary.scss';
export default function ClaimSummary() {
  return (
    <div className="claim-summary-container">
      <DubioCard
        type="inner"
        title="Claim summary"
        extra={
          <a href="#">
            <PlusOutlined />
          </a>
        }
      >
        <div className="claim-summary-contact">bubu;jb;b</div>
      </DubioCard>
    </div>
  );
}
