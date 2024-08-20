import React from "react";

function ContactCard() {
  return (
    <div className=" flex flex-col col-span-full row-span-1 sm:col-span-6 xl:col-span-3 bg-white dark:bg-black shadow-sm rounded-xl bg-cardWaveBottomRight bg-no-repeat bg-bottom">
      <header className="px-5 py-4">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          İletişim Bilgilerim
        </h2>
      </header>

      <div className="flex flex-col grow justify-start gap-2 ">
        <div className="flex justify-between items-center px-5 py-2  ">
          <h1 className="font-semibold text-xl line-clamp-1 text-gray-800 dark:text-gray-100 mr-2">
            Email:
          </h1>
          <h1 className="text-base line-clamp-1 text-gray-800 dark:text-gray-100">
            hhasanyurdakul@gmail.com
          </h1>
        </div>

        <div className="flex justify-between items-center px-5 py-2  ">
          <h1 className="font-semibold text-xl line-clamp-1 text-gray-800 dark:text-gray-100 mr-2">
            Telefon:
          </h1>
          <h1 className="text-base line-clamp-1 text-gray-800 dark:text-gray-100">
            (555) 555 55 55
          </h1>
        </div>

        <div className="flex justify-between items-center px-5 py-2">
          <h1 className="font-semibold text-xl text-gray-800 dark:text-gray-100 mr-2">
            Adres:
          </h1>
          <h1 className="text-base text-right text-gray-800 dark:text-gray-100 line-clamp-3">
            Birlik Mahallesi, 123. Sokak, No: 4, 06000 Altındağ/Ankara
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
