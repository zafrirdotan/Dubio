import React from "react";
import { useSelector } from "react-redux";
import { articlesArrSelector } from "../../../redux/Slices/ArticleSlice";
import SuspiciousClaim from "../../../components/suspicious-claim/suspicious-claim";
import "./SuspiciousClaimsList.scss";

function SuspiciousClaimsList(props: any) {
  const articles = useSelector(articlesArrSelector);
  return (
    <div className="claim-list">
      {articles.map((article: any) => {
        return <SuspiciousClaim article={article} key={article.ArticleId} />;
      })}
    </div>
  );
}

export default SuspiciousClaimsList;
