import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import UpcomingBirthdays from "./UpcomingBirthdays";
import axios from "axios";

function NationalHolidays() {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  const [upcomingNationalHolidays, setUpcomingNationalHolidays] = useState([]);

  useEffect(() => {
    axios.get(`${apiBaseUrl}/NationalHoliday/upcoming`).then((response) => {
      setUpcomingNationalHolidays(response.data.$values);
    });
  }, []);

  return (
    <div className=" flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-black shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Yaklaşan Resmi Tatiller
        </h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto max-h-72 overflow-y-auto">
          <table className="table-auto w-full dark:text-gray-300">
            {/* Table header */}
            <thead className="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50/50 dark:bg-gray-700 dark:bg-opacity-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Tatil Adı</div>
                </th>

                <th className="p-2">
                  <div className="font-semibold text-center">
                    Başlangıç Tarihi
                  </div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Bitiş Tarihi</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm overflow-y-scroll  font-medium ">
              {/* Row */}
              {upcomingNationalHolidays.map((holiday, index) => (
                <tr key={index}>
                  <td className="p-2">
                    <div className="flex items-center">
                      <div className="text-gray-800 dark:text-gray-100">
                        {holiday.nationalHolidayName}
                      </div>
                    </div>
                  </td>

                  <td className="p-2">
                    <div className="text-center">
                      {holiday.nationalHolidayStartDate &&
                        holiday.nationalHolidayStartDate
                          .split("T")[0]
                          .replaceAll("-", "/")}
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">
                      {holiday.nationalHolidayEndDate &&
                        holiday.nationalHolidayEndDate
                          .split("T")[0]
                          .replaceAll("-", "/")}
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

export default NationalHolidays;
