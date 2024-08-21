import {
  Approval,
  Check,
  CheckCircle,
  DoNotDisturb,
  Pending,
} from "@mui/icons-material";
import React from "react";

function MyLeaves({ remainingLeaveDays, leaveList }) {
  const getIcon = (status) => {
    switch (status) {
      case "Approved":
        return (
          <CheckCircle className="w-9 h-9 rounded-full shrink-0 mr-2 sm:mr-3 text-green-400  dark:bg-black" />
        );

      case "Rejected":
        return (
          <DoNotDisturb className="w-9 h-9 rounded-full shrink-0 mr-2 sm:mr-3 text-red-400  dark:bg-black" />
        );

      case "Pending":
        return (
          <Pending className="w-9 h-9 rounded-full shrink-0 mr-2 sm:mr-3 text-orange-400  dark:bg-black" />
        );

      default:
        return null;
    }
  };

  console.log("LŞLLSLSLS", leaveList);
  return (
    <div className="col-span-full xl:col-span-5 bg-white dark:bg-black shadow-sm rounded-xl bg-cardWaveTopMiddle bg-no-repeat bg-top">
      <header className="px-5 py-4 ">
        <h2 className="font-semibold text-black dark:text-white">
          İzin Taleplerim
        </h2>
      </header>
      <div className="px-5 py-4 flex flex-col justify-center items-center">
        <h1 className="text-6xl text-black dark:text-white">
          {remainingLeaveDays} GÜN
        </h1>
        <h1 className="text-base font-light text-black dark:text-white">
          kalan izin hakkınız bulunmaktadır.
        </h1>
      </div>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto max-h-40 overflow-y-auto">
          <table className="table-auto w-full dark:text-gray-300">
            {/* Table header */}
            <thead className="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50/50 dark:bg-gray-700 dark:bg-opacity-50 rounded-sm">
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
            <tbody className="text-sm font-medium">
              {leaveList &&
                leaveList.reverse().map((leave, index) => (
                  <tr key={index}>
                    <td className="p-2">
                      <div className="flex justify-center items-center">
                        {getIcon(leave.requestStatus)}
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-center">{leave.leaveType}</div>
                    </td>
                    <td className="p-2">
                      <div className="text-center">
                        {leave.startDate &&
                          leave.startDate.split("T")[0].replaceAll("-", "/")}
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-center">
                        {leave.endDate &&
                          leave.endDate.split("T")[0].replaceAll("-", "/")}
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

export default MyLeaves;
