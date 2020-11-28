import React from 'react';
import ClaimSummary from '../../components/ClaimSummary/ClaimSummary';
import PageHeader from '../../components/PageHeader/PageHeader';
import { articleList } from '../MockData/articleList';
import SuspiciousClaim from '../SuspiciousClaimsPage/SuspiciousClaimsList/SuspiciousClaim';
import ClaimDetailsForm from './ClaimDetailsForm/ClaimDetailsForm';
import RelevantSourcesList from './RelevantSourcesList/RelevantSourcesList';

export default function FactCheckPage() {
  return (
    <div className="page-container">
      <PageHeader
        bannerName="banner"
        leftImageName="game-console"
        pageTitle="Fact-Check Claim"
        subTitle="Submit your assessment of this claim"
      />
      <SuspiciousClaim article={articleList[0]} />
      <ClaimSummary />

      <ClaimDetailsForm />

      <RelevantSourcesList />
    </div>
  );
}
