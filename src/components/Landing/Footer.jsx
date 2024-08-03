import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
function Footer() {
  return (
    <footer className="bg-white dark:bg-black">
      <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Şirket
            </h3>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className=" hover:underline">
                  Hakkımızda
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Kariyer
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Marka Kimliği
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Yardım Merkezi
            </h3>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Sıkça Sorulan Sorular
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <a href="#" className="hover:underline"></a>
              <li className="mb-4">
                <a href="#" className="hover:underline"></a>
                <a href="#" className="hover:underline">
                  İletişim
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Yasal
            </h3>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Gizlilik Politikası
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Lisans
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Koşullar
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Geliştiriciler
            </h3>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className=" hover:underline">
                  Dökümantasyon
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  API
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Fiyatlandırma
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Platformlar
            </h3>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  iOS
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Android
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Windows
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  MacOS
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="text-center">
          <a
            href="#"
            className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              src="/assets/images/logo-icon.png"
              className="h-6 mr-3 sm:h-9"
              alt="hrmap Logo"
            />
          </a>
          <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
            © 2024-2025 hrmap. Tüm Hakları Saklıdır.
          </span>
          <ul className="flex justify-center mt-5 space-x-5">
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
              >
                <XIcon />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
              >
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
              >
                <FacebookIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
