import React, { useEffect, useState } from "react";
import { getToken } from "../../utils/Utils";
import axios from "axios";
import { Divider } from "@mui/material";

function UpcomingEvents() {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  let token = getToken();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiBaseUrl}/Events/upcoming`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data.$values);
          setEvents(res.data.$values);
        }
      })
      .catch(() => {
        console.log("Bir hata oluştu.");
      });
  }, []);

  return (
    <div className="col-span-full xl:col-span-8 bg-white dark:bg-black shadow-sm rounded-xl ">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Yaklaşan Etkinlikler
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
                  <div className="font-semibold text-left">Etkinlik Adı</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Açıklama</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Başlangıç</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Bitiş</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium ">
              {events.length > 0 &&
                events.map((event, index) => (
                  <>
                    <tr key={index}>
                      <td className="p-2">
                        <div className="flex items-center">
                          <div className="text-gray-800 dark:text-gray-100 ">
                            {event.eventName}
                          </div>
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-left line-clamp-5 md:line-clamp-none">
                          {event.eventDescription}
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-left">
                          {event.eventStartDate &&
                            event.eventStartDate
                              .split("T")[0]
                              .replaceAll("-", "/")}
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-left">
                          {" "}
                          {event.eventEndDate &&
                            event.eventEndDate
                              .split("T")[0]
                              .replaceAll("-", "/")}
                        </div>
                      </td>
                    </tr>
                    <Divider flexItem className="w-full" />
                  </>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UpcomingEvents;
