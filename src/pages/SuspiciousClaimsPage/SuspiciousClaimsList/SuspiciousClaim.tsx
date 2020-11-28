import { Card } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import DubioCard from '../../../components/DubioCard/DubioCard';
import TrendingCounter from '../../../components/TrendingCounter/TrendingCounter';
import ClaimComment from './ClaimComment';
const { Meta } = Card;
export default function SuspiciousClaim({ articleTitle, article }: any) {
  return (
    <div className="claim-container">
      <DubioCard>
        <div className="clime-card ">
          <Meta
            avatar={<div className="img-box"></div>}
            title="Article / Video Title "
            description={
              <div>
                <Link to="/Fact-Check" className="link">
                  {article.Title}
                </Link>
              </div>
            }
          />
          <Meta title="Source " description="This is the description" />
          <TrendingCounter
            isFireOn={false}
            isBookOn={false}
            bookCount={10}
            fireCount={16}
          />
        </div>
      </DubioCard>
      <div className="comment-container">
        <ClaimComment />
      </div>
    </div>
  );
}
