<<<<<<< HEAD
// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import PageHeader from '../../components/PageHeader/PageHeader';
// import { getSettings } from '../../redux/Slices/SettingsSlice';
// import SuspiciousClaimsFilter from './SuspiciousClaimsFilter';
// import SuspiciousClaimsList from './SuspiciousClaimsList/SuspiciousClaimsList';
// import './SuspiciousClaimsPage.scss';

// export default function SuspiciousClaimsPage() {
//   const dispatch = useDispatch();
//   dispatch(getSettings());
//   return (
//     <div className="page-container">
//       <PageHeader
//         bannerName="banner"
//         leftImageName="streams-icon"
//         pageTitle="Suspicious Claims"
//         subTitle="See which suspicious claims are trending online!"
//       />
//       <SuspiciousClaimsFilter />
//       <SuspiciousClaimsList />
//     </div>
//   );
// }

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import PageHeader from "../../components/PageHeader/PageHeader";
import { getSettings } from "../../redux/Slices/SettingsSlice";
import { getArticles } from "../../redux/Slices/ArticleSlice";
import SuspiciousClaimsFilter from "./SuspiciousClaimsFilter";
import SuspiciousClaimsList from "./SuspiciousClaimsList/SuspiciousClaimsList";
import "./SuspiciousClaimsPage.scss";
=======
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PageHeader from '../../components/PageHeader/PageHeader';
import { getSettings } from '../../redux/Slices/SettingsSlice';
import SuspiciousClaimsFilter from './SuspiciousClaimsFilter';
import SuspiciousClaimsList from './SuspiciousClaimsList/SuspiciousClaimsList';
import './SuspiciousClaimsPage.scss';
>>>>>>> 9b5ce8ad80a3e85ad8f3a9626a6bcf93ba5aba0b

export default function SuspiciousClaimsPage() {
  const dispatch = useDispatch();
  dispatch(getSettings());
<<<<<<< HEAD

  useEffect(() => {
    dispatch(getArticles());
  }, []);

=======
>>>>>>> 9b5ce8ad80a3e85ad8f3a9626a6bcf93ba5aba0b
  return (
    <div className="page-container">
      <PageHeader
        bannerName="banner"
        leftImageName="streams-icon"
        pageTitle="Suspicious Claims"
        subTitle="See which suspicious claims are trending online!"
      />
      <SuspiciousClaimsFilter />
      <SuspiciousClaimsList />
    </div>
  );
}
