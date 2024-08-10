import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

import SidebarLinkGroup from "./SidebarLinkGroup";
import {
  ArrowBackIos,
  Email,
  KeyboardArrowDown,
  KeyboardTab,
  SpaceDashboard,
} from "@mui/icons-material";

function Sidebar({ sidebarOpen, setSidebarOpen, variant = "default" }) {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <div className="min-w-fit">
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex lg:!flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-[100dvh] overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-white dark:bg-black p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        } ${
          variant === "v2"
            ? "border-r border-gray-200 dark:border-white"
            : "rounded-r-2xl shadow-sm"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-gray-500 hover:text-gray-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <ArrowBackIos className="w-6 h-6 fill-current" />
          </button>
          {/* Logo */}
          <NavLink end to="/" className="block">
            <img
              src="/assets/images/logo-icon.png"
              className="w-[32px] h-[32px]"
            />
          </NavLink>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <h3 className="text-xs uppercase text-gray-400 dark:text-gray-500 font-semibold pl-3">
              <span
                className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                aria-hidden="true"
              >
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                Seçenekler
              </span>
            </h3>
            <ul className="mt-3">
              {/* Dashboard */}
              <li
                className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${
                  pathname.endsWith("dashboard") &&
                  "from-accent/[0.12] dark:from-secondary/[0.24] to-secondary[0.04]"
                }`}
              >
                <NavLink
                  end
                  to="/dashboard"
                  className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                    pathname.endsWith("dashboard")
                      ? ""
                      : "hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="grow flex items-center">
                      <SpaceDashboard
                        className={`shrink-0 w-4 h-4 fill-current ${
                          pathname.endsWith("dashboard")
                            ? "text-primary"
                            : "text-gray-400 dark:text-gray-500"
                        }`}
                      />
                      <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                        Anasayfa
                      </span>
                    </div>
                  </div>
                </NavLink>
              </li>

              {/* Dashboard */}
              <li
                className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${
                  pathname.endsWith("/main") &&
                  "from-accent/[0.12] dark:from-secondary/[0.24] to-secondary[0.04]"
                }`}
              >
                <NavLink
                  end
                  to="/dashboard/main"
                  className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                    pathname.endsWith("/main")
                      ? ""
                      : "hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="grow flex items-center">
                      <SpaceDashboard
                        className={`shrink-0 w-4 h-4 fill-current ${
                          pathname.endsWith("/main")
                            ? "text-primary"
                            : "text-gray-400 dark:text-gray-500"
                        }`}
                      />
                      <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                        Main
                      </span>
                    </div>
                  </div>
                </NavLink>
              </li>

              {/* Dashboard */}
              {/* <SidebarLinkGroup
                activecondition={
                  pathname === "/" || pathname.includes("dashboard")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                          pathname === "/" || pathname.includes("dashboard")
                            ? ""
                            : "hover:text-gray-900 dark:hover:text-white"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleClick();
                          setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <SpaceDashboard
                              className={`shrink-0 w-4 h-4 fill-current ${
                                pathname === "/" ||
                                pathname.includes("dashboard")
                                  ? "text-primary"
                                  : "text-gray-400 dark:text-gray-500"
                              }`}
                            />

                            <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Ana Menü
                            </span>
                          </div>
                          Icon
                          <div className="flex shrink-0 ml-2">
                            <KeyboardArrowDown
                              className={`w-3 h-3 shrink-0 ml-1 fill-current text-gray-400 dark:text-gray-500 ${
                                open && "rotate-180"
                              }`}
                            />
                          </div>
                        </div>
                      </a>
                      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                        <ul className={`pl-8 mt-1 ${!open && "hidden"}`}>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/dashboard/main"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-primary"
                                  : "text-gray-500/90 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Kullanıcılar
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup> */}

              {/* Messages */}
              {/* <li
                className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${
                  pathname.includes("messages") &&
                  "from-accent/[0.12] dark:from-accent/[0.24] to-accent[0.04]"
                }`}
              >
                <NavLink
                  end
                  to="/dashboard/messages"
                  className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                    pathname.includes("messages")
                      ? ""
                      : "hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="grow flex items-center">
                      <Email
                        className={`shrink-0 w-4 h-4 fill-current ${
                          pathname.includes("messages")
                            ? "text-accent"
                            : "text-gray-400 dark:text-gray-500"
                        }`}
                      />
                      <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                        Mesajlar
                      </span>
                    </div>
                    Badge
                    <div className="flex flex-shrink-0 ml-2">
                      <span className=" inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-primary px-2 rounded">
                        4
                      </span>
                    </div>
                  </div>
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="w-12 pl-4 pr-3 py-2">
            <button
              className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
              onClick={() => setSidebarExpanded(!sidebarExpanded)}
            >
              <span className="sr-only">Expand / collapse sidebar</span>
              <KeyboardTab className="shrink-0 w-4 h-4 fill-current text-gray-400 dark:text-gray-500 sidebar-expanded:rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
