import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import SuspiciousClaimsFilter from '../../components/suspicious-claims-filter/suspicious-claims-filter';
import SuspiciousClaimsList from './SuspiciousClaimsList/SuspiciousClaimsList';
import './SuspiciousClaimsPage.scss';

export default function SuspiciousClaimsPage() {
  return (
    <div className="page-container">
      <PageHeader
        bannerName="banner"
        leftImageName="streams-icon"
        pageTitle="Suspicious Claims"
        subTitle="See which suspicious claims are trending online!"
      />
      <SuspiciousClaimsFilter />
      <SuspiciousClaimsList />
    </div>
  );
}
