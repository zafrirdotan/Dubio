import React from 'react';
import { articleList } from '../../MockData/articleList';
import SuspiciousClaim from './SuspiciousClaim';
import './SuspiciousClaimsList.scss';
export default function SuspiciousClaimsList() {
  return (
    <div className="claim-list">
      {articleList.map((article: any) => {
        return <SuspiciousClaim article={article} key={article.ArticleId} />;
      })}
    </div>
  );
}
