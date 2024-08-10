import React from "react";
import BiggerProfileCard from "../../components/DashboardProfilePageComponents/BiggerProfileCard";
import ContactCard from "../../components/DashboardProfilePageComponents/ContactCard";
import AbstractShapeA from "../../components/DashboardProfilePageComponents/AbstractShapeA";
import AbstractShapeB from "../../components/DashboardProfilePageComponents/AbstractShapeB";
import HelpCard from "../../components/DashboardProfilePageComponents/HelpCard";

function DashboardProfilePage() {
  return (
    <>
      <BiggerProfileCard />
      <ContactCard />
      <AbstractShapeA />
      <AbstractShapeB />
      <HelpCard />
    </>
  );
}

export default DashboardProfilePage;
