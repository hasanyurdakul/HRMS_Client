import React from "react";

function UpcomingEvents() {
  return (
    <div className="col-span-full xl:col-span-8 bg-white dark:bg-black shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Yaklaşan Etkinlikler
        </h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto max-h-72 overflow-y-auto">
          <table className="table-auto w-full dark:text-gray-300">
            {/* Table header */}
            <thead className="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Etkinlik Adı</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Açıklama</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Başlangıç</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Bitiş</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-gray-100 dark:divide-gray-700/60">
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-gray-800 dark:text-gray-100">
                      Barbekü Partisi
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-left">
                    Yaza veda ederken sıcak bir barbekü partisi düzenliyoruz!
                    Keyifli vakit geçireceğimiz bu etkinlikte, birbirinden
                    lezzetli ızgara yemeklerin tadını çıkaracağız. Ailenizle ve
                    arkadaşlarınızla birlikte bu güzel akşamda buluşmak için
                    sabırsızlanıyoruz. Katılımınızı bekliyoruz!
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-left">18.08.2024</div>
                </td>
                <td className="p-2">
                  <div className="text-left">19.08.2024</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-gray-800 dark:text-gray-100">
                      Film Gecesi
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-left">
                    Sinema keyfini açık havaya taşıyoruz! Film gecemizde,
                    yıldızların altında harika bir film izleyeceğiz. Patlamış
                    mısırlar ve atıştırmalıklar bizden, yanınıza sadece rahat
                    bir battaniye almayı unutmayın. Hangi filmi izlemek
                    istediğinizi seçmek için anketimize katılabilirsiniz. Tüm
                    sinemaseverleri bekliyoruz!
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-left">18.08.2024</div>
                </td>
                <td className="p-2">
                  <div className="text-left">19.08.2024</div>
                </td>
              </tr>{" "}
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-gray-800 dark:text-gray-100">
                      Yaz Pikniği
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-left">
                    Doğa ile iç içe bir gün geçirmek için harika bir fırsat! Yaz
                    pikniğimizde, açık havada oyunlar oynayacak, keyifli
                    sohbetler eşliğinde lezzetli yiyecekler tadacağız. Geniş
                    alanlar, çocuklar için oyun parkı ve dinlenme alanlarıyla
                    dolu bu etkinlik, herkes için unutulmaz bir deneyim olacak.
                    Ailenizle ve arkadaşlarınızla katılmayı unutmayın!
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-left">18.08.2024</div>
                </td>
                <td className="p-2">
                  <div className="text-left">19.08.2024</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UpcomingEvents;
