import React, { useState } from "react";
import Sidebar from "../components/Sidebar/index";
import Header from "../components/Header/index";

function DashboardPage({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
