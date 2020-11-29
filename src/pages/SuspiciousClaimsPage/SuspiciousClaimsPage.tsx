import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import PageHeader from "../../components/PageHeader/PageHeader";
import { getSettings } from "../../redux/Slices/SettingsSlice";
import { getArticles } from "../../redux/Slices/ArticleSlice";
import SuspiciousClaimsFilter from "./SuspiciousClaimsFilter";
import SuspiciousClaimsList from "./SuspiciousClaimsList/SuspiciousClaimsList";
import "./SuspiciousClaimsPage.scss";

export default function SuspiciousClaimsPage() {
  const dispatch = useDispatch();
  dispatch(getSettings());

  useEffect(() => {
    dispatch(getArticles());
  }, []);

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
