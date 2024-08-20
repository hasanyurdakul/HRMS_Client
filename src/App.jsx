import React, { useEffect } from "react";
import { RouterProvider, useNavigate } from "react-router-dom";
import router from "./router/router.jsx";
import ThemeProvider from "./utils/ThemeContext";
import { ToastContainer, Zoom } from "react-toastify";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { userLogin } from "./redux/features/userSlice.js";
import { getDecodedToken, getToken } from "./utils/Utils.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getToken();

    if (token) {
      console.log(token);
      var decodedToken = getDecodedToken();
      var user = {
        isUser: true,
        username: decodedToken.username,
        role: decodedToken[
          "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
        ],
        companyId: decodedToken.companyId,
      };
      dispatch(userLogin(user));
      localStorage.setItem("hrmapToken", token);
    }
  }, [dispatch]);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        theme="colored"
        transition={Zoom}
      />
    </ThemeProvider>
  );
}

export default App;
