import React from "react";
import "./suspicious-claim-comment.scss";
import DubioCard from "../DubioCard/DubioCard";
import TrendingCounter from "../TrendingCounter/TrendingCounter";

export default function ClaimComment() {
  return (
    <div className="comment-container">
      <DubioCard>
        <div className="comment-content">
          <div className="comment-text">
            Comment text... Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </div>
          <div className="comment-trending-counter">
            <TrendingCounter
              isFireOn={true}
              isBookOn={true}
              bookCount={10}
              fireCount={16}
              id={""}
            />
          </div>
        </div>
      </DubioCard>
    </div>
  );
}
