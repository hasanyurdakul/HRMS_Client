import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../utils/Utils";
import axios from "axios";

function UpcomingBirthdays() {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  const token = getToken();
  const [birthdayList, setBirthdayList] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiBaseUrl}/Birthday/GetUpcomingBirthdays`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setBirthdayList(res.data.$values));
  }, []);

  return (
    <div className="col-span-full xl:col-span-4 bg-white dark:bg-black shadow-sm rounded-xl bg-cardWaveTopRight bg-no-repeat bg-top">
      <header className="px-5 py-4 ">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Yaklaşan Doğum Günleri
        </h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-gray-300">
            {/* Table header */}
            <thead className="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50/50 dark:bg-gray-700 dark:bg-opacity-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Kişi</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Doğum Günü</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium">
              {/* Row */}
              {birthdayList &&
                birthdayList.map((birthday, index) => (
                  <tr key={index}>
                    <td className="p-2">
                      <div className="flex items-center">
                        <img
                          src="https://placehold.co/300x300"
                          className="w-9 h-9 rounded-full shrink-0 mr-2 sm:mr-3"
                        />

                        <div className="text-gray-800 dark:text-gray-100">
                          {birthday.employeeFirstName}{" "}
                          {birthday.employeeLastName}
                        </div>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-center">
                        {birthday.birthDate &&
                          birthday.birthDate.split("T")[0].replaceAll("-", "/")}
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UpcomingBirthdays;
