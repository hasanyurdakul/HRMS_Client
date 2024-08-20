import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

import {
  AccountBox,
  AddBusiness,
  ArrowBackIos,
  Badge,
  KeyboardTab,
  PersonAdd,
  SpaceDashboard,
} from "@mui/icons-material";
import { useSelector } from "react-redux";

function Sidebar({ sidebarOpen, setSidebarOpen, variant = "default" }) {
  const user = useSelector((state) => state.user);
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
              {/* Root */}
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

              {/* Profile */}
              <li
                className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${
                  pathname.endsWith("/profile") &&
                  "from-accent/[0.12] dark:from-secondary/[0.24] to-secondary[0.04]"
                }`}
              >
                <NavLink
                  end
                  to="/dashboard/profile"
                  className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                    pathname.endsWith("/profile")
                      ? ""
                      : "hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="grow flex items-center">
                      <AccountBox
                        className={`shrink-0 w-4 h-4 fill-current ${
                          pathname.endsWith("/profile")
                            ? "text-primary"
                            : "text-gray-400 dark:text-gray-500"
                        }`}
                      />
                      <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                        Profil
                      </span>
                    </div>
                  </div>
                </NavLink>
              </li>

              {/* Employees */}
              {user.role != "Admin" ? (
                <li
                  className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${
                    pathname.endsWith("/employees") &&
                    "from-accent/[0.12] dark:from-secondary/[0.24] to-secondary[0.04]"
                  }`}
                >
                  <NavLink
                    end
                    to="/dashboard/employees"
                    className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                      pathname.endsWith("/employees")
                        ? ""
                        : "hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="grow flex items-center">
                        <Badge
                          className={`shrink-0 w-4 h-4 fill-current ${
                            pathname.endsWith("/employees")
                              ? "text-primary"
                              : "text-gray-400 dark:text-gray-500"
                          }`}
                        />
                        <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                          Personeller
                        </span>
                      </div>
                    </div>
                  </NavLink>
                </li>
              ) : null}

              {/* Create User */}
              {user.role != "CompanyUser" ? (
                <li
                  className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${
                    pathname.endsWith("/createuser") &&
                    "from-accent/[0.12] dark:from-secondary/[0.24] to-secondary[0.04]"
                  }`}
                >
                  <NavLink
                    end
                    to="/dashboard/createuser"
                    className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                      pathname.endsWith("/createuser")
                        ? ""
                        : "hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="grow flex items-center">
                        <PersonAdd
                          className={`shrink-0 w-4 h-4 fill-current ${
                            pathname.endsWith("/createuser")
                              ? "text-primary"
                              : "text-gray-400 dark:text-gray-500"
                          }`}
                        />
                        <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                          Hrmap Kullanıcısı Oluştur
                        </span>
                      </div>
                    </div>
                  </NavLink>
                </li>
              ) : null}

              {/* Register Company */}
              {user.role === "Admin" ? (
                <li
                  className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${
                    pathname.endsWith("/registercompany") &&
                    "from-accent/[0.12] dark:from-secondary/[0.24] to-secondary[0.04]"
                  }`}
                >
                  <NavLink
                    end
                    to="/dashboard/registercompany"
                    className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                      pathname.endsWith("/registercompany")
                        ? ""
                        : "hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="grow flex items-center">
                        <AddBusiness
                          className={`shrink-0 w-4 h-4 fill-current ${
                            pathname.endsWith("/registercompany")
                              ? "text-primary"
                              : "text-gray-400 dark:text-gray-500"
                          }`}
                        />
                        <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                          Şirket Kayıt Et
                        </span>
                      </div>
                    </div>
                  </NavLink>
                </li>
              ) : null}

              {/* Create Employee */}
              {user.role === "CompanyManager" ? (
                <li
                  className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${
                    pathname.endsWith("/createemployee") &&
                    "from-accent/[0.12] dark:from-secondary/[0.24] to-secondary[0.04]"
                  }`}
                >
                  <NavLink
                    end
                    to="/dashboard/createemployee"
                    className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                      pathname.endsWith("/createemployee")
                        ? ""
                        : "hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="grow flex items-center">
                        <AddBusiness
                          className={`shrink-0 w-4 h-4 fill-current ${
                            pathname.endsWith("/createemployee")
                              ? "text-primary"
                              : "text-gray-400 dark:text-gray-500"
                          }`}
                        />
                        <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                          Personel Ekle
                        </span>
                      </div>
                    </div>
                  </NavLink>
                </li>
              ) : null}
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
