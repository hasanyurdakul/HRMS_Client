import React from "react";
import TopCountries from "../../components/DashboardMainPageComponents/TopCountries";
import ProfileCard from "../../components/DashboardMainPageComponents/ProfileCard";

function DashboardMainPage() {
  return (
    <>
      <ProfileCard />
      <TopCountries />
    </>
  );
}

export default DashboardMainPage;
