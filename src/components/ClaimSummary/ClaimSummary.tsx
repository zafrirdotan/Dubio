import React from 'react';
import DubioCard from '../DubioCard/DubioCard';
import { PlusOutlined } from '@ant-design/icons';

import './ClaimSummary.scss';
import Claim from './Claim';
import { Button } from 'antd';
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
      <div className="claim-summary-contact">
        <Claim text="bubuu" numberOfLikes={1} />
      </div>
    </DubioFormCard>
  );
}
