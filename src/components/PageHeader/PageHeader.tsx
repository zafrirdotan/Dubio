import React from 'react';
import './PageHeader.scss';
export default function PageHeader() {
  return (
    <div className="header-Banner">
      <img
        className="cropped-banner"
        src={require('../../images/banner.png')}
      />
      <div className="header-content">
        <img
          className="computer-img"
          src={require('../../images/streams-icon.png')}
        />
        <div className="page-title-container">
          <div className="page-title">Suspicious Claims</div>
          <div className="page-sub-title">
            See which suspicious claims are trending online!
          </div>
        </div>
      </div>
    </div>
  );
}
