import React from 'react';
import './RelevantSourcesList.scss';
import DubioFormCard from '../../../components/DubioFormCard/DubioFormCard';
import { Collapse } from 'antd';
const { Panel } = Collapse;
export default function RelevantSourcesList() {
  return (
    <DubioFormCard
      title="Relevant sources for fact-checking this claim"
      collapsible={true}
      submitButtonText="Add new"
    >
      <div>bubu</div>
    </DubioFormCard>
  );
}
