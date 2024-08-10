import { Pending } from "@mui/icons-material";
import React from "react";

function MyLeaves() {
  return (
    <div className="col-span-full row-span-4 md:row-span-2 xl:col-span-4 bg-white dark:bg-black shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-black dark:text-white">
          İzin Taleplerim
        </h2>
      </header>
      <div className="px-5 py-4 flex flex-col justify-center items-center">
        <h1 className="text-6xl text-black dark:text-white">10 GÜN</h1>
        <h1 className="text-lg text-black dark:text-white">
          izin hakkınız bulunmaktadır.
        </h1>
      </div>

      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-gray-300">
            {/* Table header */}
            <thead className="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-center">Durum</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Tip</div>
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
            <tbody className="text-sm font-medium divide-y divide-gray-100 dark:divide-gray-700/60">
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex justify-center items-center">
                    <Pending className="w-9 h-9 rounded-full shrink-0 mr-2 sm:mr-3 text-orange-400  dark:bg-black" />
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">Mazeret İzini</div>
                </td>
                <td className="p-2">
                  <div className="text-center">10.08.2024</div>
                </td>
                <td className="p-2">
                  <div className="text-center">12.08.2024</div>
                </td>
              </tr>{" "}
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex justify-center items-center">
                    <Pending className="w-9 h-9 rounded-full shrink-0 mr-2 sm:mr-3 text-orange-400  dark:bg-black" />
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">Mazeret İzini</div>
                </td>
                <td className="p-2">
                  <div className="text-center">10.08.2024</div>
                </td>
                <td className="p-2">
                  <div className="text-center">12.08.2024</div>
                </td>
              </tr>{" "}
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex justify-center items-center">
                    <Pending className="w-9 h-9 rounded-full shrink-0 mr-2 sm:mr-3 text-orange-400  dark:bg-black" />
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">Mazeret İzini</div>
                </td>
                <td className="p-2">
                  <div className="text-center">10.08.2024</div>
                </td>
                <td className="p-2">
                  <div className="text-center">12.08.2024</div>
                </td>
              </tr>{" "}
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex justify-center items-center">
                    <Pending className="w-9 h-9 rounded-full shrink-0 mr-2 sm:mr-3 text-orange-400  dark:bg-black" />
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">Mazeret İzini</div>
                </td>
                <td className="p-2">
                  <div className="text-center">10.08.2024</div>
                </td>
                <td className="p-2">
                  <div className="text-center">12.08.2024</div>
                </td>
              </tr>{" "}
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex justify-center items-center">
                    <Pending className="w-9 h-9 rounded-full shrink-0 mr-2 sm:mr-3 text-orange-400  dark:bg-black" />
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">Mazeret İzini</div>
                </td>
                <td className="p-2">
                  <div className="text-center">10.08.2024</div>
                </td>
                <td className="p-2">
                  <div className="text-center">12.08.2024</div>
                </td>
              </tr>{" "}
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex justify-center items-center">
                    <Pending className="w-9 h-9 rounded-full shrink-0 mr-2 sm:mr-3 text-orange-400  dark:bg-black" />
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">Mazeret İzini</div>
                </td>
                <td className="p-2">
                  <div className="text-center">10.08.2024</div>
                </td>
                <td className="p-2">
                  <div className="text-center">12.08.2024</div>
                </td>
              </tr>{" "}
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex justify-center items-center">
                    <Pending className="w-9 h-9 rounded-full shrink-0 mr-2 sm:mr-3 text-orange-400  dark:bg-black" />
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">Mazeret İzini</div>
                </td>
                <td className="p-2">
                  <div className="text-center">10.08.2024</div>
                </td>
                <td className="p-2">
                  <div className="text-center">12.08.2024</div>
                </td>
              </tr>{" "}
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex justify-center items-center">
                    <Pending className="w-9 h-9 rounded-full shrink-0 mr-2 sm:mr-3 text-orange-400  dark:bg-black" />
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">Mazeret İzini</div>
                </td>
                <td className="p-2">
                  <div className="text-center">10.08.2024</div>
                </td>
                <td className="p-2">
                  <div className="text-center">12.08.2024</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MyLeaves;
