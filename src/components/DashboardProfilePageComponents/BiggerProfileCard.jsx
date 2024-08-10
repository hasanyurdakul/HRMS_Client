import React from "react";

function BiggerProfileCard() {
  return (
    <div className=" flex flex-col col-span-full row-span-1 sm:col-span-6 xl:col-span-6 bg-white dark:bg-black shadow-sm rounded-xl bg-no-repeat bg-top bg-cardWaveTopLeft">
      <header className="px-5 py-4">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Profilim
        </h2>
      </header>

      <div className="flex flex-col grow justify-center gap-2 ">
        <div className="flex flex-col grow justify-between items-center px-5 py-4 pb-2  ">
          <div className="flex flex-row justify-between items-center gap-1 leading-3 ">
            <div className="flex flex-col max-w-48">
              <h1 className="font-semibold text-3xl h-fit line-clamp-3 text-black dark:text-gray-100">
                Hasan Yurdakul
              </h1>
              <h1 className="text-base   h-fit text-black dark:text-gray-100">
                Yazılım Departmanı
              </h1>
              <h1 className="text-sm font-light  h-fit text-black dark:text-gray-100">
                Junior Backend Developer
              </h1>
            </div>
            <div className="ml-2 max-h-40 max-w-48">
              <img
                src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1723304578~exp=1723305178~hmac=c440659046de91858844de833353fe6caffb79add608f3c6feaf904da213ec18"
                alt="profile_picture"
                className="rounded-xl mb-4"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-end px-5 py-2  ">
          <h1 className="font-semibold text-xl line-clamp-1 text-gray-800 dark:text-gray-100 mr-2">
            Yöneticim:
          </h1>
          <h1 className="text-base line-clamp-1 text-gray-800 dark:text-gray-100">
            John Doe
          </h1>
        </div>

        <div className="flex justify-between items-end px-5 pb-2 mb-2">
          <h1 className="font-semibold text-xl line-clamp-1 text-gray-800 dark:text-gray-100 mr-2">
            İşe Giriş Tarihim:
          </h1>
          <h1 className="text-base line-clamp-1 text-gray-800 dark:text-gray-100">
            15.08.2021
          </h1>
        </div>
      </div>
    </div>
  );
}

export default BiggerProfileCard;
