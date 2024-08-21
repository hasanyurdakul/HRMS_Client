import React, { useEffect, useState } from "react";
import ProfileCard from "../../components/DashboardMainPageComponents/ProfileCard";
import UpcomingBirthdays from "../../components/DashboardMainPageComponents/UpcomingBirthdays";
import MyLeaves from "../../components/DashboardMainPageComponents/MyLeaves";
import NationalHolidays from "../../components/DashboardMainPageComponents/NationalHolidays";
import UpcomingEvents from "../../components/DashboardMainPageComponents/UpcomingEvents";
import axios from "axios";
import { getToken } from "../../utils/Utils";
import { GridLoader } from "react-spinners";
import CustomGridLoader from "../../components/CustomLoader/CustomGridLoader";

function DashboardMainPage() {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  let token = getToken();
  const [employeeData, setEmployeeData] = useState({});
  const [loading, setLoading] = useState(true); // Loading state
  const [remainingLeaveDays, setRemainingLeaveDays] = useState(0);
  const [leaveList, setLeaveList] = useState([]);

  const getData = async () => {
    try {
      const employeeResponse = await axios.get(
        `${apiBaseUrl}/Employee/employee-card`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const leaveCardResponse = await axios.get(
        `${apiBaseUrl}/Leave/MyLeaveCard`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log("leaveCardResponse", leaveCardResponse.data.leaves.$values);

      setEmployeeData(employeeResponse.data);
      setLeaveList(leaveCardResponse.data.leaves.$values);
      setRemainingLeaveDays(leaveCardResponse.data.remainingLeaveDays);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false); // Data fetching is complete
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <CustomGridLoader />; // Loading indicator
  }

  return (
    <>
      <ProfileCard employeeData={employeeData} />
      <MyLeaves remainingLeaveDays={remainingLeaveDays} leaveList={leaveList} />
      <UpcomingBirthdays />
      <NationalHolidays />
      <UpcomingEvents />
    </>
  );
}

export default DashboardMainPage;
