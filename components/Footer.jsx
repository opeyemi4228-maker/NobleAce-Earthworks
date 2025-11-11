import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets"; // Adjust if your logo path differs

const FOOTER_TEXT = {
  Fr: {
    newsletterTitle: "S’inscrire à la newsletter",
    newsletterDesc: "Je m’abonne à la newsletter pour rester informé(e)",
    emailPlaceholder: "Adresse email",
    subscribe: "S’inscrire",
    contactTitle: "Nous contacter",
    address1: "6 Place de l’Église",
    address2: "15270 Champs sur Tarentaine Marchal",
    phone: "04 71 78 76 33",
    proSpace: "Espace pro",
    brochures: "Nos brochures",
    infoOffices: "Nos bureaux d’information",
    howToCome: "Comment venir chez nous ?",
    copyright: "© Office de Tourisme de Sumène-Artense 2025",
    agency: "Réalisation Agence de communication SPKTR",
    legal: "Mentions légales",
  },
  En: {
    newsletterTitle: "Subscribe to the newsletter",
    newsletterDesc: "I subscribe to the newsletter to stay informed",
    emailPlaceholder: "Email address",
    subscribe: "Subscribe",
    contactTitle: "Contact us",
    address1: "6 Place de l’Église",
    address2: "15270 Champs sur Tarentaine Marchal",
    phone: "+33 4 71 78 76 33",
    proSpace: "Pro space",
    brochures: "Our brochures",
    infoOffices: "Our information offices",
    howToCome: "How to get here?",
    copyright: "© Sumène-Artense Tourist Office 2025",
    agency: "Created by SPKTR Communication Agency",
    legal: "Legal notice",
  },
};

const Footer = ({ lang = "Fr" }) => {
  const t = FOOTER_TEXT[lang];

  return (
    <footer className="bg-[#0C1E2C] text-white font-sans">
      {/* Top section */}
      <div className="flex flex-col md:flex-row items-start justify-between px-4 md:px-12 lg:px-24 py-8 border-b border-[#C48C37] gap-8 md:gap-0">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start w-full md:w-auto mb-4 md:mb-0">
          <Image
            src={assets.logo}
            alt="Sumène Artense Logo"
            width={100}
            height={100}
            className="mb-4"
          />
        </div>
        {/* Newsletter */}
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <h2 className="text-base md:text-xl font-semibold mb-2">{t.newsletterTitle}</h2>
          <p className="mb-4 text-xs md:text-sm">{t.newsletterDesc}</p>
          <form className="flex w-full max-w-md">
            <input
              type="email"
              placeholder={t.emailPlaceholder}
              className="flex-1 px-2 py-2 md:px-4 md:py-3 bg-[#617180] text-white placeholder-white border border-white focus:outline-none text-xs md:text-base"
            />
            <button
              type="submit"
              className="px-3 py-2 md:px-6 md:py-3 bg-white text-[#29410d] font-semibold text-xs md:text-base"
            >
              {t.subscribe}
            </button>
          </form>
        </div>
        {/* Divider for mobile */}
        <hr className="block md:hidden border-[#617180] my-4" />
        {/* Contact */}
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <h3 className="text-base md:text-lg mb-2">{t.contactTitle} <span className="ml-2 text-[#b7d36b]">&rarr;</span></h3>
          <p className="mb-1 text-xs md:text-base">{t.address1}</p>
          <p className="mb-1 text-xs md:text-base">{t.address2}</p>
          <p className="font-bold text-base md:text-xl mt-2">{t.phone}</p>
        </div>
        {/* Divider for mobile */}
        <hr className="block md:hidden border-[#3a5617] my-4" />
        {/* Links */}
        <div className="w-full md:w-auto">
          <h3 className="text-base md:text-lg mb-2">{t.proSpace} <span className="ml-2 text-[#b7d36b]">&rarr;</span></h3>
          <p className="mb-1 text-xs md:text-base">{t.brochures} <span className="ml-2 text-[#b7d36b]">&rarr;</span></p>
          <p className="mb-1 text-xs md:text-base">{t.infoOffices} <span className="ml-2 text-[#b7d36b]">&rarr;</span></p>
          <p className="mb-1 text-xs md:text-base">{t.howToCome} <span className="ml-2 text-[#b7d36b]">&rarr;</span></p>
        </div>
      </div>
      {/* Bottom section */}
      <div className="bg-[#617180] py-4 px-4 flex flex-col md:flex-row md:items-center md:justify-between text-xs md:text-sm gap-2 md:gap-0">
        <div className="text-center md:text-left md:w-auto">
          {t.copyright}
        </div>
        <div className="text-center md:w-auto">
          {t.agency}
        </div>
        <div className="text-center md:text-right md:w-auto">
          <a href="#" className="underline">{t.legal}</a>
        </div>
        {/* Partner logos */}
        <div className="flex justify-center items-center mt-2 md:mt-0 gap-2 w-full">
          <Image src="/images/partner1.png" alt="Partner 1" width={32} height={32} />
          <Image src="/images/partner2.png" alt="Partner 2" width={32} height={32} />
          <Image src="/images/partner3.png" alt="Partner 3" width={32} height={32} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;