import React, { useEffect, useState } from "react";
import BiggerProfileCard from "../../components/DashboardProfilePageComponents/BiggerProfileCard";
import ContactCard from "../../components/DashboardProfilePageComponents/ContactCard";
import AbstractShapeA from "../../components/DashboardProfilePageComponents/AbstractShapeA";
import AbstractShapeB from "../../components/DashboardProfilePageComponents/AbstractShapeB";
import HelpCard from "../../components/DashboardProfilePageComponents/HelpCard";
import axios from "axios";
import { getToken } from "../../utils/Utils";
import CustomGridLoader from "../../components/CustomLoader/CustomGridLoader";

function DashboardProfilePage() {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  let token = getToken();
  const [employeeCardData, setEmployeeCardData] = useState({});
  const [loading, setLoading] = useState(true); // Loading state

  const getData = async () => {
    try {
      const employeeCardResponse = await axios.get(
        `${apiBaseUrl}/Employee/employee-card`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setEmployeeCardData(employeeCardResponse.data);
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
      <BiggerProfileCard employeeCardData={employeeCardData} />
      <ContactCard />
      <AbstractShapeA />
      <AbstractShapeB />
      <HelpCard />
    </>
  );
}

export default DashboardProfilePage;
