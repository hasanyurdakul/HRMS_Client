import React from "react";

function ProfileCard() {
  return (
    <div className=" flex flex-col col-span-full row-span-4 md:row-span-1 sm:col-span-6 xl:col-span-3 bg-white dark:bg-black shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Profilim
        </h2>
      </header>

      <div className="flex flex-col grow justify-center gap-2">
        <div className="flex flex-col grow  items-center px-5 py-4 pb-2  ">
          <div className="flex  items-center gap-1 leading-3 ">
            <div className="flex flex-col max-w-48">
              <h1 className="font-semibold text-3xl h-fit text-black dark:text-gray-100">
                Hasan Yurdakul
              </h1>
              <h1 className="text-sm italic h-fit text-black dark:text-gray-100">
                Yazılım Departmanı
              </h1>
              <h1 className="text-sm italic h-fit text-black dark:text-gray-100">
                Junior Backend Developer
              </h1>
            </div>
            <img
              src="https://placehold.co/300x300"
              alt="profile_picture"
              className="w-40  h-40 rounded-xl  mb-4"
            />
          </div>
        </div>

        <div className="flex justify-between items-end px-5 py-2  ">
          <h1 className="font-semibold text-xl line-clamp-1 text-gray-800 dark:text-gray-100 mr-2">
            Yöneticim:
          </h1>
          <h1 className="text-lg line-clamp-1 text-gray-800 dark:text-gray-100">
            John Doe
          </h1>
        </div>

        <div className="flex justify-between items-end px-5 pb-2 mb-2">
          <h1 className="font-semibold text-xl line-clamp-1 text-gray-800 dark:text-gray-100 mr-2">
            İşe Giriş Tarihim:
          </h1>
          <h1 className="text-lg line-clamp-1 text-gray-800 dark:text-gray-100">
            15.08.2021
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
