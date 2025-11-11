import React from "react";
import Image from "next/image";

const HeadlinesSection = ({ lang = "En" }) => {
  const TEXT = {
    En: {
      headline: "HEADLINES",
      subheadline: "IN SUMÈNE ARTENSE",
      cardTitle: "Rent a bike during the autumn holidays",
      cardDesc:
        "Fancy a bike ride along the Green Track or on the marked trails of Little Scandinavia, but don’t have a…",
      more: "More informations",
    },
    Fr: {
      headline: "ACTUALITÉS",
      subheadline: "EN SUMÈNE ARTENSE",
      cardTitle: "Louez un vélo pendant les vacances d'automne",
      cardDesc:
        "Envie d'une balade à vélo sur la Voie Verte ou les sentiers balisés de la Petite Scandinavie, mais vous n'avez pas de…",
      more: "Plus d'informations",
    },
  };
  const t = TEXT[lang];

  return (
    <section className="relative w-full min-h-[600px] flex flex-col lg:flex-row">
      {/* Background image and overlay */}
      <div className="relative flex-1 min-h-[400px] lg:min-h-[600px]">
        <Image
          src="/images/lake-bg.jpg" // Replace with your background image
          alt="Lake"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        {/* Overlay for text and arrows */}
        <div className="absolute inset-0 flex flex-col justify-center pl-12 pb-12 text-white z-10">
          <div className="mt-24">
            <h2 className="text-4xl font-serif font-semibold tracking-wide mb-2">
              {t.headline}
            </h2>
            <h3 className="text-2xl font-bold mb-6">{t.subheadline}</h3>
            <div className="w-48 h-1 bg-gray-300 mb-6"></div>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full bg-white bg-opacity-30 flex items-center justify-center text-2xl">
                <span>&lt;</span>
              </button>
              <button className="w-12 h-12 rounded-full bg-white bg-opacity-30 flex items-center justify-center text-2xl">
                <span>&gt;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Card section */}
      <div className="flex-1 flex items-center justify-center relative z-20">
        <div className="bg-white shadow-lg p-10 w-full max-w-2xl mx-auto mt-16 mb-16 relative">
          {/* Top right image */}
          <div className="absolute -top-16 right-10 border-4 border-[#4b6e2a] rounded-sm overflow-hidden w-48 h-48 bg-white">
            <Image
              src="/images/bike-autumn.jpg" // Replace with your card image
              alt={t.cardTitle}
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* Card content */}
          <div className="pt-36">
            <div className="w-32 h-1 bg-[#4b6e2a] mb-6"></div>
            <h4 className="text-[#4b6e2a] text-2xl font-semibold mb-2">
              {t.cardTitle}
            </h4>
            <p className="text-gray-700 mb-6">{t.cardDesc}</p>
            <a
              href="#"
              className="text-[#4b6e2a] font-medium flex items-center gap-2 hover:underline"
            >
              {t.more} <span className="ml-1">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadlinesSection;
