import React, { useState } from "react";
import Header from "../components/Header/index";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function SidebarLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10  border border-white">
              {children}
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default SidebarLayout;
