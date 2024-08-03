import React from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
function HeroSection() {
  return (
    <section className="bg-white dark:bg-black">
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
            İnsan Kaynakları Yönetiminde Yeni Dönem
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Gelişmiş özelliklerle dolu, kullanıcı dostu HRMS platformumuzla
            insan kaynakları süreçlerinizi dijitalleştirin ve optimize edin. İşe
            alımdan performans değerlendirmesine kadar her adımda yanınızdayız.
          </p>
          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a
              href="/"
              className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <TrendingUpIcon className="w-3 h-3 mr-4" />
              Teklif Alın
            </a>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="/public/assets/images/hero.png" alt="hero image" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
