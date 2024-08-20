import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import ErrorPage from "../pages/ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardMainPage from "../pages/DashboardPages/DashboardMainPage";
import DashboardProfilePage from "../pages/DashboardPages/DashboardProfilePage";
import DashboardEmployeesPage from "../pages/DashboardPages/DashboardEmployeesPage";
import DashboardCreateUserPage from "../pages/DashboardPages/DashboardCreateUserPage";
import DashboardRegisterCompanyPage from "../pages/DashboardPages/DashboardRegisterCompanyPage";
import DashboardCreateEmployeePage from "../pages/DashboardPages/DashboardCreateEmployeePage";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardMainPage />,
      },
      {
        path: "/dashboard/profile",
        element: <DashboardProfilePage />,
      },
      {
        path: "/dashboard/employees",
        element: <DashboardEmployeesPage />,
      },
      {
        path: "/dashboard/createuser",
        element: <DashboardCreateUserPage />,
      },
      {
        path: "/dashboard/registercompany",
        element: <DashboardRegisterCompanyPage />,
      },
      {
        path: "/dashboard/createemployee",
        element: <DashboardCreateEmployeePage />,
      },
    ],
  },
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
