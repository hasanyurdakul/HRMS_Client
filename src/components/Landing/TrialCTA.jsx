import React from "react";

function TrialCTA() {
  return (
    <section className="bg-gray-50 dark:bg-black">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="max-w-screen-sm mx-auto text-center">
          <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
            Ücretsiz denemenize bugün başlayın
          </h2>
          <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            30 gün boyunca deneyin. Kredi kartı gerekmez.
          </p>
          <a
            href="#"
            className="text-white bg-primary hover:bg-primaryHover font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none "
          >
            30 gün boyunca ücretsiz deneme
          </a>
        </div>
      </div>
    </section>
  );
}

export default TrialCTA;
