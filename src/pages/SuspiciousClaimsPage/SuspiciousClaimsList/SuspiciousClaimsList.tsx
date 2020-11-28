import React from "react";
import { articleList } from "../../MockData/articleList";
import SuspiciousClaim from "./SuspiciousClaim";
import "./SuspiciousClaimsList.scss";

import { connect } from "react-redux";

function SuspiciousClaimsList(props: any) {
  let articles = (props.articlesArr);
  return (
    <div className="claim-list">
      {articles.map((article: any) => {
        return <SuspiciousClaim article={article} key={article.ArticleId} />;
      })}
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  articlesArr: state.articleSlice.articles,
});

export default connect(mapStateToProps)(SuspiciousClaimsList);
