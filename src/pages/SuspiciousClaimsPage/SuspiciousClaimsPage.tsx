import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import SuspiciousClaimsFilter from './SuspiciousClaimsFilter';
import SuspiciousClaimsList from './SuspiciousClaimsList/SuspiciousClaimsList';
import './SuspiciousClaimsPage.scss';
export default function SuspiciousClaimsPage() {
  return (
    <div className="page-container">
      <PageHeader />
      <SuspiciousClaimsFilter />
      <SuspiciousClaimsList />
    </div>
  );
}
