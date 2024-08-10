import React from "react";

function NationalHolidays() {
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
                  <div className="font-semibold text-center">Gün Sayısı</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">
                    Başlangıç Tarihi
                  </div>
                </th>{" "}
                <th className="p-2">
                  <div className="font-semibold text-center">Bitiş Tarihi</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm overflow-y-scroll  font-medium ">
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-gray-800 dark:text-gray-100">
                      Yılbaşı
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">1</div>
                </td>{" "}
                <td className="p-2">
                  <div className="text-center">01.01.2025</div>
                </td>{" "}
                <td className="p-2">
                  <div className="text-center">01.01.2025</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-gray-800 dark:text-gray-100">
                      Ulusal Egemenlik ve Çocuk Bayramı
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">1</div>
                </td>{" "}
                <td className="p-2">
                  <div className="text-center">23.04.2025</div>
                </td>{" "}
                <td className="p-2">
                  <div className="text-center">23.04.2025</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-gray-800 dark:text-gray-100">
                      İşçi Bayramı
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">1</div>
                </td>{" "}
                <td className="p-2">
                  <div className="text-center">01.05.2025</div>
                </td>{" "}
                <td className="p-2">
                  <div className="text-center">01.05.2025</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-gray-800 dark:text-gray-100">
                      Atatürk&apos;ü Anma, Gençlik ve Spor Bayramı
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">1</div>
                </td>{" "}
                <td className="p-2">
                  <div className="text-center">19.05.2025</div>
                </td>{" "}
                <td className="p-2">
                  <div className="text-center">19.05.2025</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-gray-800 dark:text-gray-100">
                      Kurban Bayramı
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">4</div>
                </td>{" "}
                <td className="p-2">
                  <div className="text-center">06.06.2025</div>
                </td>{" "}
                <td className="p-2">
                  <div className="text-center">10.06.2025</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-gray-800 dark:text-gray-100">
                      Zafer Bayramı
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">1</div>
                </td>{" "}
                <td className="p-2">
                  <div className="text-center">30.08.2025</div>
                </td>{" "}
                <td className="p-2">
                  <div className="text-center">30.08.2025</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-gray-800 dark:text-gray-100">
                      Cumhuriyet Bayramı
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">1</div>
                </td>{" "}
                <td className="p-2">
                  <div className="text-center">29.10.2025</div>
                </td>{" "}
                <td className="p-2">
                  <div className="text-center">29.10.2025</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-gray-800 dark:text-gray-100">
                      Ramazan Bayramı (Birinci Gün)
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">1</div>
                </td>{" "}
                <td className="p-2">
                  <div className="text-center">10.03.2025</div>
                </td>{" "}
                <td className="p-2">
                  <div className="text-center">10.03.2025</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-gray-800 dark:text-gray-100">
                      Ramazan Bayramı (İkinci Gün)
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">1</div>
                </td>{" "}
                <td className="p-2">
                  <div className="text-center">11.03.2025</div>
                </td>{" "}
                <td className="p-2">
                  <div className="text-center">11.03.2025</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-gray-800 dark:text-gray-100">
                      Ramazan Bayramı (Üçüncü Gün)
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">1</div>
                </td>{" "}
                <td className="p-2">
                  <div className="text-center">12.03.2025</div>
                </td>{" "}
                <td className="p-2">
                  <div className="text-center">12.03.2025</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-gray-800 dark:text-gray-100">
                      Kurban Bayramı (Birinci Gün)
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">1</div>
                </td>{" "}
                <td className="p-2">
                  <div className="text-center">06.06.2025</div>
                </td>{" "}
                <td className="p-2">
                  <div className="text-center">06.06.2025</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default NationalHolidays;
