import React from "react";

function Errorpage() {
  return (
    <div className="min-h-screen w-screen dark:bg-black bg-white flex items-center">
      <div className="container max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-5 text-black dark:text-white">
        <div className="flex flex-col w-full items-center">
          <div className="mb-3 py-8 md:mb-0 md:py-0">
            <img src="/assets/images/logo-icon.png" className="w-32 mx-auto" />
          </div>
          <div className="w-full mx-8">
            <div className="text-7xl text-primary font-extrabold md:mb-8">
              404
            </div>
            <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
              Üzgünüz, aradığınız sayfayı bulamadık.
            </p>
            <a
              href="#"
              className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-primary hover:bg-primaryHover"
            >
              Anasayfaya Geri Dön
            </a>
          </div>
        </div>
        <div className="w-full lg:flex lg:justify-end mx-5 my-12">
          <img
            src="/assets/images/error-page.png"
            className=""
            alt="Page not found"
          />
        </div>
      </div>
    </div>
  );
}

export default Errorpage;
