import React from "react";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import StorageIcon from "@mui/icons-material/Storage";
import GroupIcon from "@mui/icons-material/Group";
import PublicIcon from "@mui/icons-material/Public";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
function TrustSection() {
  return (
    <section className="bg-white dark:bg-black">
      <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
        <div className="col-span-2 mb-8">
          <p className="text-lg font-medium text-primary ">
            Dünya Çapında Güvenilir
          </p>
          <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
            600 milyondan fazla kullanıcı ve 10.000 ekip tarafından güveniliyor
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Sıkı güvenlik ve uyumluluk standartlarımız yaptığımız her şeyin
            merkezindedir. Sizi ve müşterilerinizi korumak için yorulmadan
            çalışıyoruz.
          </p>
          <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
            <div>
              <a
                href="/"
                className="inline-flex items-center text-base font-medium text-primary hover:text-primaryHover "
              >
                Yasallık Rehberini Keşfedin <ChevronRightIcon />
              </a>
            </div>
            <div>
              <a
                href="/"
                className="inline-flex items-center text-base font-medium text-primary hover:text-primaryHover"
              >
                Güven Merkezini Ziyaret Edin <ChevronRightIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
          <div>
            <StorageIcon
              fontSize="40px"
              className="w-12 h-12 text-5xl mb-2 text-primary md:w-18 md:h-18"
            />
            <h3 className="mb-2 text-2xl font-bold dark:text-white">
              99.99% Uptime
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Sıfır bakım kesintisiyle
            </p>
          </div>
          <div>
            <GroupIcon
              fontSize="40px"
              className="w-12 h-12 text-5xl mb-2 text-primary md:w-18 md:h-18"
            />
            <h3 className="mb-2 text-2xl font-bold dark:text-white">
              600M+ Kullanıcı
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Dünya çapında 600 milyondan fazla kullanıcı tarafından güveniliyor
            </p>
          </div>
          <div>
            <PublicIcon
              fontSize="40px"
              className="w-12 h-12 text-5xl mb-2 text-primary md:w-18 md:h-18"
            />
            <h3 className="mb-2 text-2xl font-bold dark:text-white">
              100+ Ülke
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Boyunca İnsan Kaynakları birimleri tarafından tercih ediliyor
            </p>
          </div>
          <div>
            <SyncAltIcon
              fontSize="40px"
              className="w-12 h-12 text-5xl mb-2 text-primary md:w-18 md:h-18"
            />

            <h3 className="mb-2 text-2xl font-bold dark:text-white">
              5+ Milyon
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Günlük İşlem Sayısı
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustSection;
