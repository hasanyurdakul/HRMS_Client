import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import ErrorPage from "../pages/ErrorPage";
import SidebarLayout from "../layouts/SidebarLayout";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <SidebarLayout />,
    children: [
      {
        path: "/dashboard/profile",
        element: <h1 className="border border-white">profile</h1>,
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
