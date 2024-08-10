import React from "react";

function UpcomingEvents() {
  return (
    <div className="col-span-full row-span-2 md:row-span-1 xl:col-span-4 bg-white dark:bg-black shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Yaklaşan Etkinlikler
        </h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-gray-300">
            {/* Table header */}
            <thead className="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50 rounded-sm">
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
            <tbody className="text-sm font-medium divide-y divide-gray-100 dark:divide-gray-700/60">
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <img
                      src="https://placehold.co/300x300"
                      className="w-9 h-9 rounded-full shrink-0 mr-2 sm:mr-3"
                    />

                    <div className="text-gray-800 dark:text-gray-100">
                      Hasan Yurdakul
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">15.08.1998</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <img
                      src="https://placehold.co/300x300"
                      className="w-9 h-9 rounded-full shrink-0 mr-2 sm:mr-3"
                    />

                    <div className="text-gray-800 dark:text-gray-100">
                      Taha Yurdakul
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">03.09.2002</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <img
                      src="https://placehold.co/300x300"
                      className="w-9 h-9 rounded-full shrink-0 mr-2 sm:mr-3"
                    />

                    <div className="text-gray-800 dark:text-gray-100">
                      Aslıhan Karaağaç
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">25.10.2000</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <img
                      src="https://placehold.co/300x300"
                      className="w-9 h-9 rounded-full shrink-0 mr-2 sm:mr-3"
                    />

                    <div className="text-gray-800 dark:text-gray-100">
                      Taha Yurdakul
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">03.09.2002</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <img
                      src="https://placehold.co/300x300"
                      className="w-9 h-9 rounded-full shrink-0 mr-2 sm:mr-3"
                    />

                    <div className="text-gray-800 dark:text-gray-100">
                      Furkan Demirbozan
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">01.10.1997</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UpcomingEvents;
