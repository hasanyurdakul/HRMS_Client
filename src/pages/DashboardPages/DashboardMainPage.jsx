import React from "react";
import ProfileCard from "../../components/DashboardMainPageComponents/ProfileCard";
import UpcomingBirthdays from "../../components/DashboardMainPageComponents/UpcomingBirthdays";
import MyLeaves from "../../components/DashboardMainPageComponents/MyLeaves";
import NationalHolidays from "../../components/DashboardMainPageComponents/NationalHolidays";
import UpcomingEvents from "../../components/DashboardMainPageComponents/UpcomingEvents";

function DashboardMainPage() {
  return (
    <>
      <ProfileCard />
      <MyLeaves />
      <UpcomingBirthdays />
      <NationalHolidays />
      <UpcomingEvents />
    </>
  );
}

export default DashboardMainPage;
