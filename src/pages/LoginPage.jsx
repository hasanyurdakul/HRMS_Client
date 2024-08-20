import React, { useEffect, useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import { Link, useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import * as Yup from "yup";
import { Formik } from "formik";
import { Edit } from "@mui/icons-material";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/features/userSlice";
import { jwtDecode } from "jwt-decode";
import { getToken } from "../utils/Utils";

const loginSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required!")
    .min(3, "Username is too short!")
    .max(20, "Username is too long!"),
  password: Yup.string()
    .required("Password is required!")
    .min(4, "Password is too short!"),
});

function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();
    if (token) {
      navigate("/dashboard");
    }
  }, []);

  const handleLogin = async (value) => {
    console.log(value);
    await axios
      .post("http://localhost:5062/api/Auth/login", value)
      .then((res) => {
        console.log(res);
        console.log(res.data.token);
        if (res.status === 200) {
          toast.success("Giriş Başarılı");
          var token = res.data.token;
          var decodedToken = jwtDecode(token);
          var user = {
            isUser: true,
            username: decodedToken.username,
            role: decodedToken[
              "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
            ],
          };
          dispatch(userLogin(user));
          localStorage.setItem("hrmapToken", token);
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err.response.data);
        if (err.response.status === 401) {
          toast.error("Hatalı Kullanıcı Adı veya Parola");
        } else {
          toast.error("Birşeyler Yanlış Gitti, Lütfen Tekrar Deneyin");
        }
      });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white dark:bg-black shadow sm:rounded-lg flex justify-center flex-1 ">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div
            className="cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <img
              src="/assets/images/logo-no-background.png"
              className="w-32 mx-auto"
            />
          </div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold text-black dark:text-white">
              Giriş Yap
            </h1>
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center"></div>
              <div className="mx-auto max-w-xs">
                <div className="flex flex-col ">
                  <Formik
                    initialValues={{
                      username: "admin",
                      password: "Admin123.",
                    }}
                    onSubmit={(values) => handleLogin(values)}
                    validationSchema={loginSchema}
                  >
                    {({
                      values,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      errors,
                      touched,
                    }) => (
                      <>
                        <TextField
                          variant="outlined"
                          placeholder="Kullanıcı Adı"
                          name="username"
                          onChange={handleChange("username")}
                          onBlur={handleBlur("username")}
                          value={values.username}
                          helperText={touched.username && errors.username}
                          error={touched.username && Boolean(errors.username)}
                          className="w-full px-8 py-2 rounded-lg font-medium bg-white border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        />
                        <TextField
                          variant="outlined"
                          placeholder="Parola"
                          type="password"
                          name="password"
                          onChange={handleChange("password")}
                          onBlur={handleBlur("password")}
                          value={values.password}
                          helperText={touched.password && errors.password}
                          error={touched.password && Boolean(errors.password)}
                          className="w-full px-8 py-2 rounded-lg font-medium bg-white border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        />
                        <Button
                          variant="outlined"
                          startIcon={<LoginIcon className="w-6 h-6" />}
                          onClick={handleSubmit}
                          disabled={isLoading}
                          className="mt-5 text-base tracking-wide font-semibold bg-primary hover:bg-primaryHover text-gray-100 w-full py-4 rounded-lg  transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                        >
                          <span className="ml-3"> Giriş Yap</span>
                        </Button>
                      </>
                    )}
                  </Formik>
                </div>
                <h1 className="ml-3 mt-4 text-sm text-black dark:text-white text-center">
                  Hesabın yok mu?
                </h1>

                <Button
                  variant="outlined"
                  startIcon={<Edit className="w-6 h-6" />}
                  onClick={() => {
                    navigate("/signup");
                  }}
                  disabled={isLoading}
                  className="mt-5 text-base tracking-wide font-semibold bg-accent hover:bg-accentHover text-gray-100 w-full py-4 rounded-lg  transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <span className="ml-3"> Kayıt ol</span>
                </Button>

                <p className="mt-6 text-xs text-gray-600 text-center">
                  Giriş yaparak&nbsp;
                  <a
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Kullanım Koşullarını
                  </a>
                  &nbsp;ve&nbsp;
                  <a
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Gizlilik Politikasını
                  </a>
                  &nbsp;kabul etmiş olursunuz.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1  rounded-lg  text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("/assets/images/login-background.png")',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
