import React from 'react';
import DubioCard from '../DubioCard/DubioCard';
import { PlusOutlined } from '@ant-design/icons';

import './ClaimSummary.scss';
import Claim from './Claim';
export default function ClaimSummary() {
  return (
    <div className="claim-summary-container">
      <DubioCard
        type="inner"
        title="Claim summary"
        extra={
          <a href="#">
            <PlusOutlined style={{ color: 'white', fontSize: '1.1rem' }} />
          </a>
        }
      >
        <div className="claim-summary-contact">
          <Claim text="bubuu" numberOfLikes={1} />
        </div>
      </DubioCard>
    </div>
  );
}
