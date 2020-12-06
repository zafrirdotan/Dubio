import React from "react";
import { Link } from "react-router-dom";

//STYLES
import './suspicious-claim.scss';
import { Card } from "antd";

import DubioCard from "../DubioCard/DubioCard";
import TrendingCounter from "../TrendingCounter/TrendingCounter";
import ClaimComment from "../suspicious-claim-comment/suspicious-claim-comment";
const { Meta } = Card;

export default function SuspiciousClaim({ article }: any) {
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
            bookCount={article.BookmarkCount}
            fireCount={article.HotCount}
            id={article.ArticleId}
          />
        </div>
      </DubioCard>

      <ClaimComment />
    </div>
  );
}
