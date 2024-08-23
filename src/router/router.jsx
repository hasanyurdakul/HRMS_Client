import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import ErrorPage from "../pages/ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardMainPage from "../pages/DashboardPages/DashboardMainPage";
import SignUpPage from "../pages/SignUpPage";
import DashboardProfilePage from "../pages/DashboardPages/DashboardProfilePage";
import DashboardEmployeesPage from "../pages/DashboardPages/DashboardEmployeesPage";
import DashboardCreateUserPage from "../pages/DashboardPages/DashboardCreateUserPage";
import DashboardRegisterCompanyPage from "../pages/DashboardPages/DashboardRegisterCompanyPage";
import DashboardCreateEmployeePage from "../pages/DashboardPages/DashboardCreateEmployeePage";
import DashboardCreateDepartmentPage from "../pages/DashboardPages/DashboardCreateDepartmentPage";
import DashboardCreateJobPage from "../pages/DashboardPages/DashboardCreateJobPage";
import DashboardUserEmployeeAssignPage from "../pages/DashboardPages/DashboardUserEmployeeAssignPage";
import DashboardCreateLeaveRequestPage from "../pages/DashboardPages/DashboardCreateLeaveRequestPage";
import DashboardManageLeaveRequestsPage from "../pages/DashboardPages/DashboardManageLeaveRequestsPage";
import DashboardCreateEventPage from "../pages/DashboardPages/DashboardCreateEventPage";
import DashboardCreateExpenseRequestPage from "../pages/DashboardPages/DashboardCreateExpenseRequestPage";
import DashboardManageExpenseRequestsPage from "../pages/DashboardPages/DashboardManageExpenseRequestsPage";

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
      {
        path: "/dashboard/createdepartment",
        element: <DashboardCreateDepartmentPage />,
      },
      {
        path: "/dashboard/createjob",
        element: <DashboardCreateJobPage />,
      },
      {
        path: "/dashboard/userempassign",
        element: <DashboardUserEmployeeAssignPage />,
      },
      {
        path: "/dashboard/createleaverequest",
        element: <DashboardCreateLeaveRequestPage />,
      },
      {
        path: "/dashboard/manageleaverequests",
        element: <DashboardManageLeaveRequestsPage />,
      },
      {
        path: "/dashboard/createevent",
        element: <DashboardCreateEventPage />,
      },
      {
        path: "/dashboard/createexpenserequest",
        element: <DashboardCreateExpenseRequestPage />,
      },
      {
        path: "/dashboard/manageexpenserequests",
        element: <DashboardManageExpenseRequestsPage />,
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
