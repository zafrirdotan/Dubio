import React from 'react';
import DubioCard from '../../../components/DubioCard/DubioCard';
import TrendingCounter from '../../../components/TrendingCounter/TrendingCounter';

export default function ClaimComment() {
  return (
    <DubioCard>
      <div className="comment-contact">
        <div className="comment-text">
          Comment text... Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <TrendingCounter
          isFireOn={true}
          isBookOn={true}
          bookCount={10}
          fireCount={16}
        />
      </div>
    </DubioCard>
  );
}
