import { useState } from "react";

// import DashboardCard01 from "../partials/dashboard/DashboardCard01";
// import DashboardCard02 from "../partials/dashboard/DashboardCard02";
// import DashboardCard03 from "../partials/dashboard/DashboardCard03";
// import DashboardCard04 from "../partials/dashboard/DashboardCard04";
// import DashboardCard05 from "../partials/dashboard/DashboardCard05";
// import DashboardCard06 from "../partials/dashboard/DashboardCard06";
// import DashboardCard07 from "../partials/dashboard/DashboardCard07";
// import DashboardCard08 from "../partials/dashboard/DashboardCard08";
// import DashboardCard09 from "../partials/dashboard/DashboardCard09";
// import DashboardCard10 from "../partials/dashboard/DashboardCard10";
// import DashboardCard11 from "../partials/dashboard/DashboardCard11";
// import DashboardCard12 from "../partials/dashboard/DashboardCard12";
// import DashboardCard13 from "../partials/dashboard/DashboardCard13";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="grow">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
