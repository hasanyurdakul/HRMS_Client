import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white dark:bg-black shadow sm:rounded-lg flex justify-center flex-1 ">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div>
            <img
              src="/public/assets/images/logo-no-background.png"
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
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-white border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-white border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Parola"
                />
                <button className="mt-5 tracking-wide font-semibold bg-primary hover:bg-primaryHover text-gray-100 w-full py-4 rounded-lg  transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <LoginIcon className="w-6 h-6" />

                  <span className="ml-3">Giriş Yap</span>
                </button>
                <h1 className="ml-3 mt-4 text-sm text-white text-center">
                  Hesabın yok mu?
                </h1>

                <button
                  onClick={() => {
                    navigate("/signup");
                  }}
                  className="mt-5 tracking-wide font-semibold bg-accent hover:bg-accentHover text-gray-100 w-full py-4 rounded-lg  transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <LoginIcon className="w-6 h-6" />

                  <span className="ml-3">Kayıt Ol</span>
                </button>
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
              backgroundImage:
                'url("/public/assets/images/login-background.png")',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
